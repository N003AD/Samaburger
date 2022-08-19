import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../shared/services/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  zones: any

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  
  constructor(private zone:ZoneService) { }

  ngOnInit(): void {
    this.zone.zone().subscribe(
      data=>{
        this.zones=data["hydra:member"]
        console.log(this.zones);

      }
    )
  }

}
