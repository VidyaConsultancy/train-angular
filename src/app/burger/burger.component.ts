import { Component, OnInit } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { Behaviour } from './constants/behaviour.enum';
import { Burger } from './models/burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  burger!: Map<number, Burger>;
  ingredientMap!: Map<number, Ingredient>;
  totalPrice: number = 0;

  constructor() {
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
  }

  handleIngredControl({ id, behaviour }: { id: number; behaviour: Behaviour }) {
    const ingred = this.ingredientMap.get(id);
    if (!ingred) return;

    let burgerItem = this.burger.get(id);
    if (!burgerItem) {
      burgerItem = new Burger();
      burgerItem.itemId = id;
      burgerItem.itemName = ingred.name;
      burgerItem.itemPricePerUnit = ingred.price;
      burgerItem.itemQty = 0;
      burgerItem.itemTotalPrice = 0;
    }
    switch (behaviour) {
      case Behaviour.ADD:
        burgerItem.itemQty = burgerItem.itemQty + 1;
        burgerItem.itemTotalPrice =
          burgerItem.itemQty * burgerItem.itemPricePerUnit;
        break;
      case Behaviour.SUB:
        if (burgerItem.itemQty === 0) return;
        burgerItem.itemQty = burgerItem.itemQty - 1;
        burgerItem.itemTotalPrice =
          burgerItem.itemQty * burgerItem.itemPricePerUnit;
        if (burgerItem.itemQty === 0) {
          this.burger.delete(id);
          this.calculateTotalPrice();
          return;
        }
        break;
    }
    this.burger.set(id, burgerItem);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = Array.from(this.burger).reduce((curr, [, burgerItem]) => {
      return curr + burgerItem.itemTotalPrice;
    }, 0);
  }
}
