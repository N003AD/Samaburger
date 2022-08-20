import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommandeFilterClientPipe } from './commande-client/commande-client-filter.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PanierComponent } from './pages/panier/panier.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListeComponent } from './components/liste/liste.component';
import { LayoutModule } from './layout/layout.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { ListeDetailsComponent } from './components/liste-details/liste-details.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
    declarations: [
    PanierComponent,
    CardsComponent,
    ListeComponent,
    CatalogueComponent,
    DetailsComponent,
    CardDetailsComponent,
    ListeDetailsComponent,
    CommandeClientComponent,
    CommandeFilterClientPipe
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

    ],
  exports: [
    CommonModule,
    ClientRoutingModule,
    CardsComponent,
    ListeComponent
  ]
})
export class ClientModule { }
