import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  livreur: any;

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  @Input() searchTerm: string='';

  constructor(private http: HttpClient, private myService: LivreurService) { }

  ngOnInit(): void {
    this.myService.livreur().subscribe((data)=>{
       this.livreur= data;
        console.log(this.livreur)
      // console.log(data);





     })
  }

}
