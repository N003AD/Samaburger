import { CommandeComponent } from './pages/commande/commande.component';
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
{ path: "panier",component: PanierComponent},

  {
    path: "",
    redirectTo:"catalogue",
    pathMatch: 'full'
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "commande",
    component: CommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
