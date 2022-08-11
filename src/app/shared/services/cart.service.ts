import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class CartService {

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
}
