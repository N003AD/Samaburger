import { DetailsService } from './../../../shared/services/details.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productDetails:Observable<any>|null=null;
  details:any|null=null
  DetailsService: any;
  constructor( private myservice:DetailsService, private myService:CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const idDetails = this.route.snapshot.params['id']
    // this.productDetails=this.DetailsService.getDetails(idDetails)

    // this.details=this.DetailsService.getDetails(idDetails).subscribe((data)=>)
     this.myservice.getDetails(idDetails).subscribe((data)=>this.details=data)

  }
  addPanier(panier:any, quantite:any){
    panier.quantite=quantite
    this.myService.addToCart(panier)
   }
}
