import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  private url:string = "http://localhost:8000/api/livreurs";



  constructor(private http: HttpClient, private token:TokenService) { }

  private headersOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  livreur():Observable<any>{
  return this.http.get<any>(this.url,this.headersOptions).pipe(
    map(data=>{
      let datas=data["hydra:member"]
      // console.log(datas)
      return datas
}))

  }


}
