import { Produits } from './../../../shared/models/produits';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input("products") produits:Produits|null=null;

  constructor(){
    
  }

  ngOnInit() {

  }

}
