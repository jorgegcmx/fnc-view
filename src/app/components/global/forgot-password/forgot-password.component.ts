import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterLinkActive],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email!: string
  msg!: boolean

  constructor(private service: LoginService) {
    this.email = '';
    this.msg = false;
  }

  
  resendPassword() {
    this.service.ResendPassword(this.email).subscribe((res) => {
      this.msg = res.enviado;
    });
  }

}
