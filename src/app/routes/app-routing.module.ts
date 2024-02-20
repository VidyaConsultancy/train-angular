import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from '../burger/burger.component';
import { CheckoutComponent } from '../burger/checkout/checkout.component';
import { AuthModule } from '../auth/auth.module';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { IngredientsComponent } from '../burger/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: 'burger',
    component: BurgerComponent,
    title: 'Burger King | Make your burger',
    canActivate: [AuthGuard],
  },
  {
    path: 'ingredients/:id',
    component: IngredientsComponent,
    title: 'Burger King | Make your burger',
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Burger King | Place order',
    canActivate: [AuthGuard],
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
