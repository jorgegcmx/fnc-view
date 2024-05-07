import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

export const LoginGuard = () => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  let id = loginService.getID();
  let permisos = loginService.getPermisos();
  if (id !== '' && permisos=='') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};


