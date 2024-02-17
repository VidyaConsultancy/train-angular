import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthService, private router: Router) {
    this.email = 'john@example.com';
    this.password = '';
    this.confirmPassword = '';
  }

  ngOnInit(): void {}

  handleRegister() {
    if (
      this.email.trim().length === 0 ||
      this.password.trim().length === 0 ||
      this.confirmPassword.trim().length === 0
    ) {
      return false;
    }
    if (this.password !== this.confirmPassword) {
      return false;
    }
    this.authService
      .register({ email: this.email, password: this.password })
      .subscribe((res) => {
        this.authService.setAuthenticationState(res.accessToken);
        this.authService.setAuthenticatedUser(res.user);
        this.router.navigateByUrl('/burger');
      });
    return true;
  }
}
