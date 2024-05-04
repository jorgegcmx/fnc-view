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
    const url = 'http://localhost:8080/historico/historico'
    return this.http.get<any>(url);
  }

  getDataById(Id: any): Observable<any> {
    const url = 'http://localhost:8080/historico/historico_profecional/' + Id + '';
    return this.http.get<any>(url);
  }

  getDataAgencias(): Observable<any> {
    const url = 'http://localhost:8080/agencias/lista';
    return this.http.get<any>(url);
  }

  getSaveProfecional(profesional: any): Observable<any> {
    const url = 'http://localhost:8080/profesionales/registro';
    return this.http.post<any>(url, profesional);
  }

  getCursos(nombre: any): Observable<any> {
    const url = 'http://localhost:8080/cursos/lista/' + nombre + '';
    return this.http.get<any>(url);
  }

  saveDetalleCursosProfesionales(req: any): Observable<any> {
    const url = 'http://localhost:8080/detalle/guarda';
    return this.http.post<any>(url, req);
  }

  getCertificado(req: any): Observable<any> {
    const url = 'http://localhost:8080/detalle/burcarCer/'+req+'';
    return this.http.get<any>(url);
  }


  getlistaSolicitudes(): Observable<any>{
    const url = 'http://localhost:8080/detalle/lista';
    return this.http.get<any>(url);
  }

  ActualizaSolicitud(req:any): Observable<any>{
    const url = 'http://localhost:8080/detalle/guarda';
    return this.http.post<any>(url,req);
  }

}
