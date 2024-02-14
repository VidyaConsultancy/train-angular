import { Component, OnInit } from '@angular/core';

import { BurgerService } from '../../burger/services/burger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemCount$!: Observable<number>;

  constructor(private burgerService: BurgerService) {}

  ngOnInit(): void {
    this.itemCount$ = this.burgerService.getItemCount();
  }
}
