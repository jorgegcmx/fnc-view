import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

export const LoginGuardAdmin = () => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  let permisos = loginService.getPermisos();
  let perfil = loginService.getPerfil();
  if (permisos !== '' && perfil == '') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const LoginGuardAgencia = () => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  let permisos = loginService.getPermisos();
  let perfil = loginService.getPerfil();
  if (permisos !== '' && perfil !== '') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

