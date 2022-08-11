import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './securite/login/login.component';
import { RegisterComponent } from './securite/register/register.component';

const routes: Routes = [
  // { path: 'client', loadChildren: () => import('./client/client.module').then(m => ClientModule) },

  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client',pathMatch:"full"},

  { path: "login",component: LoginComponent},
  { path: "register",component: RegisterComponent},
  { path: "**",component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
