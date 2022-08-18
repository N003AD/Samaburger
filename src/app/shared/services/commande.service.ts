import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url:string = "http://localhost:8000/api/commandes";


  constructor(private http: HttpClient, private token:TokenService) { }

  commande():Observable<any>{
  return this.http.get<any>(this.url).pipe(
    map(data=>{
      let datas=data["hydra:member"]
      // console.log(datas)
      return datas
}))
  }

  private urlSub:string = 'http://localhost:8000/api/clients/1/commandes'


  Subresssource():Observable<any>{
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this.urlSub,headersOptions)
  }

}
