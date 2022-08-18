import { commandeFilterPipeDate } from './commande/commande-filterDate.pipe';
import { LayoutModule } from './../client/layout/layout.module';
import { CommandeComponent } from './commande/commande.component';
import { FormsModule } from '@angular/forms';
import { CommandeFilterPipe } from './commande/commande-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { commandeFilterPipeZone } from './commande/commande-filterZone.pipe';
import { ZoneComponent } from './zone/zone.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CommandeComponent,
    CommandeFilterPipe,
    commandeFilterPipeZone,
    commandeFilterPipeDate,
    ZoneComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    FormsModule
  ]
})
export class AdminModule { }
