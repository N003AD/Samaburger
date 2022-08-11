import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() clickChanged: EventEmitter<string>=new EventEmitter;

  constructor(private incrementProduct:CartService) { }

  ngOnInit(): void {
  }

  items$=this.incrementProduct.items$

  filtre(value:string){
    this.clickChanged.emit(value);

  }

}
