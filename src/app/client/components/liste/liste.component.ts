import { Produits } from './../../../shared/models/produits';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
@Input() prod :Produits[]|undefined=[]
  constructor() { }

  ngOnInit(): void {
  }

}
