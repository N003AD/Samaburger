import { HttpClient } from '@angular/common/http';
import { CommandeService } from './../../shared/services/commande.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {

  listeClient : any;
  @Input() searchTerm: string='';
  constructor(private myService: CommandeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.myService.Subresssource().subscribe(
      data => {this.listeClient = data['hydra:member']
      // console.log(this.listeClient);
      }
    )}
}
