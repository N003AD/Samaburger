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


@NgModule({
    declarations: [
    PanierComponent,
    CardsComponent,
    ListeComponent,
    CatalogueComponent,
    DetailsComponent,
    CardDetailsComponent,
    ListeDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ClientRoutingModule,
    CardsComponent,
    ListeComponent
  ]
})
export class ClientModule { }
