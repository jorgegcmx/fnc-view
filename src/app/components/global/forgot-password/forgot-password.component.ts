import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
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
