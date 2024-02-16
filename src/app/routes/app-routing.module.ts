import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from '../burger/burger.component';
import { CheckoutComponent } from '../burger/checkout/checkout.component';
import { AuthModule } from '../auth/auth.module';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'burger',
    component: BurgerComponent,
    title: 'Burger King | Make your burger',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Burger King | Place order',
  },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'Burger King | 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
