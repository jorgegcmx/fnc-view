import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }  

  getData(): Observable<any> {
    const url ='http://localhost:8080/historico/historico'
       return this.http.get<any>(url);
   }

}
