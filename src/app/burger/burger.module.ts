import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BurgerComponent } from './burger.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import { BurgerItemComponent } from './burger-item/burger-item.component';

const MaterialModules = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [BurgerComponent, IngredientComponent, ControlButtonComponent, BurgerItemComponent],
  imports: [CommonModule, ...MaterialModules],
  exports: [BurgerComponent],
})
export class BurgerModule {}
