import { LivreurComponent } from './livreur/livreur.component';
import { ListeComponent } from './../client/components/liste/liste.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { ZoneComponent } from './zone/zone.component';


const routes: Routes = [
  {
    path:"",
    component: AdminDashboardComponent
  },
  {
    path: "commande",
    component: CommandeComponent
  },
  {
    path: "lister-zone",
    component: ZoneComponent
  },
  {
    path: "livreur",
    component: LivreurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
