import { Component, OnInit } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { Behaviour } from './constants/behaviour.enum';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor() {}

  ngOnInit(): void {
    const tempIngredients: [string, number][] = [
      ['bread top', 10],
      ['bread bottom', 10],
      ['veggies', 5],
      ['patty', 15],
      ['cheese', 20],
    ];
    this.ingredients = tempIngredients.map(
      ([name, price], index) => new Ingredient(index + 1, name, price)
    );
  }

  handleIngredControl(data: { id: number; behaviour: Behaviour }) {
    console.log(data);
  }
}
