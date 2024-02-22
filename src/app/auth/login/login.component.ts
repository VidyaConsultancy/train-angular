import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Login } from '../models/login';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: FormGroup<Login<FormControl>>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.required,
        ],
      ],
    });
  }

  ngOnInit(): void {}

  handleLogin() {
    if (this.user.invalid) {
      return false;
    }
    this.authService
      .login(this.user.value as Login<string>)
      .subscribe((res) => {
        this.user.reset();
        this.authService.setAuthenticationState(res.accessToken);
        this.authService.setAuthenticatedUser(res.user);
        this.router.navigateByUrl('/burger');
      });
    return true;
  }

  getErrorMessage() {
    if (this.user.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.user.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
