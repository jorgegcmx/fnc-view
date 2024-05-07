import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  LoginService(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/login/login_profesional';
    return this.http.post<any>(url, req);
  }

  LoginServiceAdmin(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/login/login_usuario';
    return this.http.post<any>(url, req);
  }

  ResendPassword(req: any): Observable<any> {
    const url = environment.apiUrlBase + '/email/resend/' + req + '';
    return this.http.get<any>(url);
  }

  setToken(userEmail: any, userID: any, admin: any) {
    this.cookies.set('userEmail', userEmail);
    this.cookies.set('userID', userID);
    this.cookies.set('admin', admin);
  }

  getEmail() {
    return this.cookies.get('userEmail');
  }
  getID() {
    return this.cookies.get('userID');
  }
  getPermisos() {
    return this.cookies.get('admin');
  }

  cerrarSesion() {
    this.cookies.set('userID', '');
    this.cookies.set('admin', '');
    this.cookies.set('userEmail', '');
  }
}
