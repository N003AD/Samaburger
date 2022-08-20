import { CommandeService } from '../../shared/services/commande.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})

export class CommandeComponent implements OnInit {
  priva: any;
  filterZone:any
  filterDate:any
  
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  @Input() searchTerm: string='';


  constructor(private http: HttpClient, private myService: CommandeService) { }

  ngOnInit(): void {
  this.myService.commande().subscribe((data)=>{
    this.priva= data;
    //  console.log(this.priva)




   })
  }


}
