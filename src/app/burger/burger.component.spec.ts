import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { BurgerComponent } from './burger.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IngredientComponent } from './ingredient/ingredient.component';
import { BurgerItemComponent } from './burger-item/burger-item.component';
import { By } from '@angular/platform-browser';

describe('BurgerComponent', () => {
  let component: BurgerComponent;
  let fixture: ComponentFixture<BurgerComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BurgerComponent, IngredientComponent, BurgerItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render app-ingredient component when no ingredients present', () => {
    const appIngredientComponent = debugElement.queryAll(
      By.css('app-ingredient')
    );
    expect(appIngredientComponent.length).toEqual(0);
  });

  it('should render app-ingredient component with ingredients values', () => {
    component.ingredientMap.set(1, { id: 1, name: 'Cheese', price: 40 });
    fixture.detectChanges();

    const appIngredientComponent = debugElement.queryAll(
      By.css('app-ingredient')
    );
    expect(appIngredientComponent.length).toEqual(1);
  });
});
