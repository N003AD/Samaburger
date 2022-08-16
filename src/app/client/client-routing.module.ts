import { AuthGuard } from './../core/guards/auth.guard';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './pages/panier/panier.component';

const routes: Routes = [
  {
    path:"catalogue",
    component: CatalogueComponent
  }
,
{ path: "panier",component: PanierComponent, canActivate: [AuthGuard]},

  {
    path: "",
    redirectTo:"catalogue",
    pathMatch: 'full'
  },
  {
    path: "details/:id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
