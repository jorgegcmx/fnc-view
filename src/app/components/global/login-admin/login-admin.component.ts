import { Component } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css',
})
export class LoginAdminComponent {
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
    this.service.LoginServiceAdmin(this.loginObj).subscribe((res) => {
      if (res.isLogged) {
        this.service.setToken(res.user, res.userId, res.permisos,'');
        this.loading = false;
        this.router.navigateByUrl('/solicitudes');
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
