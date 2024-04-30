import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  LoginService(req: any): Observable<any> {
    const url = 'http://localhost:8080/login/login_profesional'
    return this.http.post<any>(url, req);
  }

  setToken(userEmail: any, userID: any) {
    this.cookies.set("userEmail", userEmail);
    this.cookies.set("userID", userID);
  }

  getEmail() {
    return this.cookies.get("userEmail");
  }
  getID() {
    return this.cookies.get("userID");
  }

}
