import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from '../burger/burger.component';
import { CheckoutComponent } from '../burger/checkout/checkout.component';

const routes: Routes = [
  { path: 'burger', component: BurgerComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
