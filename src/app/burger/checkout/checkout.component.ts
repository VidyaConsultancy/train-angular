import { Component, OnInit } from '@angular/core';
import { Behaviour } from '../constants/behaviour.enum';
import { Burger } from '../models/burger';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  burger!: Map<number, Burger>;
  totalPrice: number = 0;

  constructor(private burgerService: BurgerService) {
    this.burger = new Map();
  }

  ngOnInit(): void {
    this.burger = this.burgerService.getBurger();
    this.totalPrice = this.burgerService.getTotalPrice();
  }
}
