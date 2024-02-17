import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

interface AuthResponse {
  accessToken: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated$: BehaviorSubject<boolean>;
  private authenticatedUser$: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    this.isAuthenticated$ = new BehaviorSubject(
      Boolean(localStorage.getItem('authToken'))
    );
    const user = localStorage.getItem('user');
    this.authenticatedUser$ = new BehaviorSubject(
      user ? JSON.parse(user) : null
    );
  }

  login(user: Login<string>) {
    return this.http.post<AuthResponse>(
      `${environment.apiBaseUrl}/login`,
      user
    );
  }

  register(user: Register<string>) {
    return this.http.post<AuthResponse>(
      `${environment.apiBaseUrl}/register`,
      user
    );
  }

  setAuthenticationState(token: string) {
    localStorage.setItem('authToken', token);
    this.isAuthenticated$.next(Boolean(token));
  }

  getAuthenticationState(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  setAuthenticatedUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAutnenticateUser(): Observable<User | null> {
    return this.authenticatedUser$.asObservable();
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated$.next(false);
    this.authenticatedUser$.next(null);
  }
}
