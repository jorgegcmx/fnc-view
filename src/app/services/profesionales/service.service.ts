import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from 'url';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = environment.apiUrlBase + '/historico/historico';
    return this.http.get<any>(url);
  }

  getDataById(Id: any): Observable<any> {
    const url =
      environment.apiUrlBase + '/historico/historico_profecional/' + Id + '';
    return this.http.get<any>(url);
  }

  getDataAgencias(): Observable<any> {
    const url = environment.apiUrlBase + '/agencias/lista';
    return this.http.get<any>(url);
  }

  getSaveProfecional(profesional: any): Observable<any> {
    const url = environment.apiUrlBase + '/profesionales/registro';
    return this.http.post<any>(url, profesional);
  }

  getCursos(nombre: any): Observable<any> {
    const url = environment.apiUrlBase + '/cursos/lista/' + nombre + '';
    return this.http.get<any>(url);
  }

  saveDetalleCursosProfesionales(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/detalle/guarda';
    return this.http.post<any>(url, req);
  }

  getCertificado(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/detalle/burcarCer/' + req + '';
    return this.http.get<any>(url);
  }

  getlistaSolicitudes(nombre: any): Observable<any> {
    const url = environment.apiUrlBase + '/detalle/lista/' + nombre + '';
    return this.http.get<any>(url);
  }

  ActualizaSolicitud(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/detalle/guarda';
    return this.http.post<any>(url, req);
  }

  getAgencias(nombre: any): Observable<any> {
    const url = environment.apiUrlBase + '/agencias/lista/'+nombre+'';
    return this.http.get<any>(url);
  }

  getAgenciasById(id:string): Observable<any> {
    const url = environment.apiUrlBase + '/agencias/busca/'+id+'';
    return this.http.get<any>(url);
  }

  getAgenciasActivas(): Observable<any> {
    const url = environment.apiUrlBase + '/agencias/lista/activas';
    return this.http.get<any>(url);
  }

  guardaAgencias(agencia: any): Observable<any> {
    const url = environment.apiUrlBase + '/agencias/guarda';
    return this.http.post<any>(url, agencia);
  }


  getlistaSolicitudesAgencia(idagencia: any,nombre: any): Observable<any> {
    const url = environment.apiUrlBase + '/detalle/lista/'+idagencia+'/' + nombre + '';
    return this.http.get<any>(url);
  }
}
