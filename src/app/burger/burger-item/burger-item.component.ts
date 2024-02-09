import { Component, OnInit, Input } from '@angular/core';
import { Burger } from '../models/burger';

@Component({
  selector: 'app-burger-item',
  templateUrl: './burger-item.component.html',
  styleUrls: ['./burger-item.component.css'],
})
export class BurgerItemComponent implements OnInit {
  @Input()
  burgerItem!: Burger;

  constructor() {}

  ngOnInit(): void {}
}
