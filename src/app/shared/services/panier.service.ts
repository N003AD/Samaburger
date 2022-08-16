import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { map, take } from 'rxjs';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  items$: any;

  constructor() {

  }

}
