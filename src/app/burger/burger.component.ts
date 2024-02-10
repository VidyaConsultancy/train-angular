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
    const tempIngredients: [string, number][] = [
      ['bread top', 10],
      ['bread bottom', 10],
      ['veggies', 5],
      ['patty', 15],
      ['cheese', 20],
    ];
    tempIngredients.forEach(([name, price], index) => {
      const id = index + 1;
      const ingred = new Ingredient(id, name, price);
      this.ingredientMap.set(id, ingred);
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
