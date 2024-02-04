import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

const MaterialModules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule, ...MaterialModules],
  exports: [LayoutComponent],
})
export class LayoutModule {}
