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
  filterDate: any;
  @Input() searchTerm: string='';

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor(private myService: CommandeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.myService.Subresssource().subscribe(
      data => {this.listeClient = data['hydra:member']
      // console.log(this.listeClient);
      }
    )}
}
