import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './_helpers/auth.guard';
// import { LoginComponent } from './securite/login/login.component';
// import { RegisterComponent } from './securite/register/register.component';

const routes: Routes = [
  // { path: 'client', loadChildren: () => import('./client/client.module').then(m => ClientModule) },

  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client',pathMatch:"full"},

  // { path: "login",component: LoginComponent},
  // { path: "register",component: RegisterComponent},
  // { path: '', redirectTo: '/login',pathMatch:"full"},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard] },

  { path: "**",component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
