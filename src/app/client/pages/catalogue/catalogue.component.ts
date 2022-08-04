import { CatalogueService } from './../../../shared/services/catalogue.service';
import { Catalogue } from './../../../shared/models/catalogue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  produits: any

  Catalogue: Catalogue|undefined
  constructor( private myservice:CatalogueService) { }

  ngOnInit(): void {
    this.myservice.getCatalogues().subscribe((data)=>this.produits=data.produits)


  }

  testfiltre(type:string){
    switch (type) {
      case "menu":
        this.myservice.getCatalogues().subscribe((data)=>this.produits=data.menus)

        break;

        case "burger":
          this.myservice.getCatalogues().subscribe((data)=>this.produits=data.burgers)

          break;

          default:
            this.myservice.getCatalogues().subscribe((data)=>this.produits=data.produits)

            break;
          }
        }


}
