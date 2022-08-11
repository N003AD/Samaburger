import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private myService:CartService) { }

  items$=this.myService.items$
  
  ngOnInit(): void {
  }
    deleteCommande(panier:any){
      this.myService.suppanier(panier)
    }
}
