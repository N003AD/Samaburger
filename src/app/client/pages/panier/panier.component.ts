import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  recupPrixTotal = 0

  constructor(private myService:CartService, private incrementProduct:CartService) { }

  items$=this.myService.items$

  ngOnInit(): void {
    this.calculSomme()
  }
  item$=this.incrementProduct.items$

    deleteCommande(panier:any){
      this.myService.suppanier(panier)
    }


     incrementProduct1(incrementProduit: any, incrementQuantity: any){
      this.myService.increment(incrementProduit,incrementQuantity )
     }

     calculSomme(){
      this.recupPrixTotal=this.myService.PricePanier()
     }
}
