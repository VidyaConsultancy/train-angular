import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ingredient } from './models/ingredient';
import { Behaviour } from './constants/behaviour.enum';
import { Burger } from './models/burger';
import { BurgerService } from './services/burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  burger!: Map<number, Burger>;
  ingredientMap!: Map<number, Ingredient>;
  totalPrice: number = 0;

  constructor(private router: Router, private burgerService: BurgerService) {
    this.ingredientMap = new Map();
    this.burger = new Map();
  }

  ngOnInit(): void {
    this.burgerService.fetchIngredientsList().subscribe((data) => {
      data.forEach((ingred) => {
        this.ingredientMap.set(ingred.id, ingred);
      });
    });
    this.burger = this.burgerService.getBurger();
    this.totalPrice = this.burgerService.getTotalPrice();
  }

  handleIngredControl({ id, behaviour }: { id: number; behaviour: Behaviour }) {
    const ingred = this.ingredientMap.get(id);
    if (!ingred) return;

    this.burgerService.handleIngredControl(ingred, behaviour);
    this.burger = this.burgerService.getBurger();
    this.totalPrice = this.burgerService.getTotalPrice();
  }

  placeOrder() {
    this.router.navigateByUrl('/checkout');
  }
}
