import { Produits } from './../../../shared/models/produits';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input("products") produits!:Produits;

  constructor(private myService:CartService){

  }

  ngOnInit() {

  }

  addPanier(panier:any){
    panier['quantite']=1
    this.myService.addToCart(panier)
  }
}
