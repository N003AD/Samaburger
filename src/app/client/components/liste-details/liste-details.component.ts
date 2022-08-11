import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.component.html',
  styleUrls: ['./liste-details.component.css']
})
export class ListeDetailsComponent implements OnInit {
  @Input()  hideQte:boolean=false
  @Input()  produits:any
  constructor() { }

  ngOnInit(): void {
  }

}
