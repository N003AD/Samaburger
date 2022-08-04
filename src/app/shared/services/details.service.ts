import { Details } from './../models/details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private url:string = "http://localhost:8000/api/details";


  constructor(private http:HttpClient) { }
  getDetails(id:number):Observable<any>{
    return this.http.get<any>(this.url+"/"+id)
  }
}

