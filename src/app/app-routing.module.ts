import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './securite/login/login.component';
import { RegisterComponent } from './securite/register/register.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: 'client', loadChildren: () => import('./client/client.module').then(m => ClientModule) },

  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client',pathMatch:"full"},

  { path: "login",component: LoginComponent},
  { path: "register",component: RegisterComponent},
  { path: 'auth/login', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login',pathMatch:"full"},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },



  { path: "**",component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
