import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    title: 'Burger King | Auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Burger King | Login',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Burger King | Register',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}