import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
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
    this.service.LoginService(this.loginObj).subscribe((res) => {
      if (res.isLogged) {
        this.service.setToken(res.user, res.userId, '');
        this.loading = false;
        this.router.navigateByUrl('/dashboard');
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
