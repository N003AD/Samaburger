import { LivreurFilterPipe } from './livreur/filter-livreur.pipe';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LivreurComponent } from './livreur/livreur.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CommandeComponent,
    CommandeFilterPipe,
    commandeFilterPipeZone,
    commandeFilterPipeDate,
    ZoneComponent,
    LivreurComponent,
    LivreurFilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ]
})
export class AdminModule { }
