import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

const MaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule, ...MaterialModules, RouterModule.forChild([])],
  exports: [LayoutComponent],
})
export class LayoutModule {}
