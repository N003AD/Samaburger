import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],

})
export class PanierComponent implements OnInit {
  popoverTitle = 'Popover title';
  popoverMessage = 'Etes-vous de vouloir de supprimer?';
  confirmClicked = false;
  cancelClicked = false;

  recupPrixTotal = 0

  constructor(private myService:CartService, private incrementProduct:CartService, private toast: NgToastService) { }

  items$=this.myService.items$

  ngOnInit(): void {
    this.calculSomme()
  }
  item$=this.incrementProduct.items$

    deleteCommande(panier:any){
    this.toast.warning({detail:"Le produit a été retiré du panier", summary:"", duration:5000})
      this.myService.suppanier(panier)
    }


     incrementProduct1(incrementProduit: any, incrementQuantity: any){
      this.toast.success({detail:"Produit ajouté avec succès", summary:"", duration:5000})

      this.myService.increment(incrementProduit,incrementQuantity )
     }

     calculSomme(){
      this.recupPrixTotal=this.myService.PricePanier()
     }


}
