import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../shared/services/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  zones: any

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
