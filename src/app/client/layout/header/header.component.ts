import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() clickChanged: EventEmitter<string>=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  filtre(value:string){
    this.clickChanged.emit(value);

  }

}
