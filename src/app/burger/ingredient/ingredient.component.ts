import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Behaviour } from '../constants/behaviour.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  @Input()
  ingred!: Ingredient;

  @Output()
  ingredControlEvent: EventEmitter<{ id: number; behaviour: Behaviour }>;

  behaviour = Behaviour;

  constructor(private router: Router) {
    this.ingredControlEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  handleControlEvent(behaviour: Behaviour) {
    this.ingredControlEvent.emit({ id: this.ingred.id, behaviour: behaviour });
  }

  goToIngredientDetail() {
    this.router.navigate(['/ingredients', this.ingred.id], {
      queryParams: { startsWith: 's', page: 1 },
    });
  }
}
