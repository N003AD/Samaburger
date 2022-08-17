import { commandeFilterPipeDate } from './../client/pages/commande/commande-filterDate.pipe';
import { LayoutModule } from './../client/layout/layout.module';
import { CommandeComponent } from '../client/pages/commande/commande.component';
import { FormsModule } from '@angular/forms';
import { CommandeFilterPipe } from '../client/pages/commande/commande-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { commandeFilterPipeZone } from '../client/pages/commande/commande-filterZone.pipe';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CommandeComponent,
    CommandeFilterPipe,
    commandeFilterPipeZone,
    commandeFilterPipeDate
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    FormsModule
  ]
})
export class AdminModule { }
