import { Injectable } from '@angular/core';

import { Behaviour } from '../constants/behaviour.enum';
import { Burger } from '../models/burger';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  private burger: Map<number, Burger>;
  private totalPrice: number;

  constructor() {
    this.burger = new Map();
    this.totalPrice = 0;
  }

  handleIngredControl(ingred: Ingredient, behaviour: Behaviour) {
    const id = ingred.id;
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

  getBurger() {
    return this.burger;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
