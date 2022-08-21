import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Refreshrequired: any;

  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products')|| '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }

   private itemsSubject = new BehaviorSubject<Produits[]>([]);
   items$ : Observable<any> = this.itemsSubject.asObservable();

   addToCart(product: any) {
     this.items$.pipe(
       take(1),
       map((products) => {
         products.push(product);
         localStorage.setItem('products', JSON.stringify(products));
       }),
     ).subscribe();
   }

   suppanier(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        if (products.includes(product)  ) {
          const sup=products.find((sup: {id:number}) => sup.id==product.id);
          if (sup) {
            let bro=products.findIndex((sup: any)=>sup.id==product.id);
            products.splice(bro,1)
            localStorage.setItem('products', JSON.stringify(products));
          }
        }
      }),
    ).subscribe();
  }

  increment(product: Produits, incrementProduct: any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach((el:any) =>{
          if(el.id === product.id){
            el.quantite=incrementProduct;
          }
        });
        localStorage.setItem('produit', JSON.stringify(products));
      })
    )
    .subscribe();
  }


PricePanier(){
  let tab=0
  this.items$.pipe(
    map((produits) => {
      produits.forEach((element:any) =>{
        tab+=(element.prix * element.quantite)
      });
      localStorage.setItem('produit', JSON.stringify(produits));
    })
  ).subscribe();
  return tab
}

}
