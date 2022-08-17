import { CommandeService } from '../../../shared/services/commande.service';
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


  @Input() searchTerm: string='';


  constructor(private http: HttpClient, private myService: CommandeService) { }

  ngOnInit(): void {
  this.myService.commande().subscribe((data)=>{
    this.priva= data;
     console.log(this.priva)

   })
  }

}
