import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url:string = "http://localhost:8000/api/commandes";


  constructor(private http: HttpClient) { }

  commande():Observable<any>{
  return this.http.get<any>(this.url).pipe(
    map(data=>{
      let datas=data["hydra:member"]
      // console.log(datas)
      return datas
}))
  }
}
