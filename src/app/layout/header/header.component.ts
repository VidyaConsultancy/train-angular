import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BurgerService } from '../../burger/services/burger.service';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemCount$!: Observable<number>;
  isAuthenticated$!: Observable<boolean>;

  constructor(
    private burgerService: BurgerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemCount$ = this.burgerService.getItemCount();
    this.isAuthenticated$ = this.authService.getAuthenticationState();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
