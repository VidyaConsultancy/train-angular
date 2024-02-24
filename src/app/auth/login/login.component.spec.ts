import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { BurgerComponent } from 'src/app/burger/burger.component';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let authService: AuthService;
  const invalidEmail = 'abc';
  const validEmail = 'john.doe@mailinator.com';
  const invalidPasswordMin = '123';
  const invalidPasswordMax = 'example12345example';
  const validPassword = 'example123';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'burger', component: BurgerComponent },
        ]),
      ],
      declarations: [LoginComponent],
      // providers: [{
      //   provide: AuthService,
      //   useValue: {
      //     login: spyOn
      //   }
      // }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should user form be defined', () => {
    expect(component.user).toBeDefined();
    expect(component.user instanceof FormGroup).toBeTrue();
  });

  it('should user form be invalid', () => {
    expect(component.user.invalid).toBeTrue();
  });

  it('should email field be invalid initially', () => {
    expect(component.user.get('email')?.invalid).toBeTrue();
  });

  it('should password field be invalid initially', () => {
    expect(component.user.get('password')?.invalid).toBeTrue();
  });

  it('should check validation related to email field', () => {
    component.user.get('email')?.patchValue(invalidEmail);
    expect(component.user.get('email')?.invalid).toBeTrue();
    expect(component.user.get('email')?.hasError('email')).toBeTrue();
  });

  it('should render `Login` button as disabled', () => {
    const loginBtn = debugElement.query(By.css('button'));
    expect(loginBtn.nativeElement.disabled).toBeTrue();
  });

  it('should render `Login` button as enabled when form fields have valid values', () => {
    component.user.get('email')?.patchValue(validEmail);
    component.user.get('password')?.patchValue(validPassword);
    fixture.detectChanges();

    const loginBtn = debugElement.query(By.css('button'));
    expect(loginBtn.nativeElement.disabled).toBeFalse();
  });

  it('should return false when handlLogin is invoked with invalid form', () => {
    expect(component.handleLogin()).toBeFalse();

    component.user.get('email')?.patchValue(invalidEmail);
    component.user.get('password')?.patchValue(invalidPasswordMin);

    expect(component.handleLogin()).toBeFalse();
  });

  it('should return true when handlLogin is invoked with valid form and invoke authService.login method', fakeAsync(() => {
    component.user.get('email')?.patchValue(validEmail);
    component.user.get('password')?.patchValue(validPassword);

    const loginSpy = spyOn(authService, 'login').and.returnValue(
      of({ user: { id: 1, email: validEmail }, accessToken: 'sometokenvalue' })
    );
    const location = TestBed.inject(Location);

    fixture.ngZone?.run(() => {
      const res = component.handleLogin();
      expect(res).toBeTrue();
      expect(loginSpy).toHaveBeenCalledWith({
        email: validEmail,
        password: validPassword,
      });
      tick(100);
      expect(location.path()).toContain('burger');
    });
  }));
});
