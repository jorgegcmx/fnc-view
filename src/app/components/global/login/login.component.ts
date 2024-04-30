import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  isLogged: boolean;
  msg: boolean;

  constructor(private service: LoginService, private router: Router) {
    this.loginObj = new Login();
    this.isLogged = false;
    this.msg = true;
  }

  SingIn() {
    this.service.LoginService(this.loginObj).subscribe((res) => {
      console.log(res);
      if (res.isLogged) {
        this.service.setToken(res.user, res.userId);
        this.router.navigateByUrl('/dashboard');
      } else {
        this.msg = false;
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