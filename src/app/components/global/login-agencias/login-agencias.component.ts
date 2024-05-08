import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-agencias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-agencias.component.html',
  styleUrl: './login-agencias.component.css'
})
export class LoginAgenciasComponent {
  loginObj: Login;
  isLogged: boolean;
  msg: boolean;
  loading!: boolean;

  constructor(private service: LoginService, private router: Router) {
    this.loginObj = new Login();
    this.isLogged = false;
    this.msg = true;
  }

  SingIn() {
    this.loading = true;
    this.service.LoginServiceAgencia(this.loginObj).subscribe((res) => {
      if (res.isLogged) {
        this.service.setToken(res.user, res.userId, res.permisos,res.perfil);
        this.loading = false;
        this.router.navigateByUrl('/agencias-solicitudes');
      } else {
        this.msg = false;
        this.loading = false;
      }
    });
  }
}

export class Login {
  email: string;
  contrasena: string;
  constructor() {
    this.email = '';
    this.contrasena = '';
  }
}
