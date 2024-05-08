import { Routes } from '@angular/router';
import { LoginComponent } from './components/global/login/login.component';
import { LayoutComponent } from './components/global/layout/layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { RegistroComponent } from './components/global/registro/registro.component';
import { ForgotPasswordComponent } from './components/global/forgot-password/forgot-password.component';
import { MisCertificacionesComponent } from './components/sesion/profecionales/mis-certificaciones/mis-certificaciones.component';
import { ListaCursosComponent } from './components/cursos/lista-cursos/lista-cursos.component';
import { PagosPayComponent } from './components/global/pagos-pay/pagos-pay.component';
import { ConsultaCertificadoComponent } from './components/global/consulta-certificado/consulta-certificado.component';
import { LoginGuard } from './components/guards/login.guard';
import { LayoutAdminComponent } from './components/global/layout-admin/layout-admin.component';
import { ListaSolicitudesComponent } from './components/sesion/admin/solicitudes/lista-solicitudes/lista-solicitudes.component';
import { ListaAgeciasComponent } from './components/sesion/admin/agencias/lista-agecias/lista-agecias.component';
import { ListaProfesionalesComponent } from './components/sesion/admin/profesionales/lista-profesionales/lista-profesionales.component';
import { ListaDeCursosComponent } from './components/sesion/admin/cursos/lista-de-cursos/lista-de-cursos.component';
import { LoginAdminComponent } from './components/global/login-admin/login-admin.component';
import { LoginGuardAdmin, LoginGuardAgencia } from './components/guards/login.admin.guard';
import { AgengiasSolicitudesComponent } from './components/sesion/agencias/agengias-solicitudes/agengias-solicitudes.component';
import { LayoutAgenciasComponent } from './components/global/layout-agencias/layout-agencias.component';
import { LoginAgenciasComponent } from './components/global/login-agencias/login-agencias.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: LoginAdminComponent,
  },
  {
    path: 'manager',
    component: LoginAgenciasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'consulta-certificado',
    component: ConsultaCertificadoComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: MisCertificacionesComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'lista_cursos',
        component: ListaCursosComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'payment',
        component: PagosPayComponent,
        canActivate: [LoginGuard],
      },
    ],
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'solicitudes',
        component: ListaSolicitudesComponent,
        canActivate: [LoginGuardAdmin],
      },
      {
        path: 'cursos',
        component: ListaDeCursosComponent,
        canActivate: [LoginGuardAdmin],
      },
      {
        path: 'agencias',
        component: ListaAgeciasComponent,
        canActivate: [LoginGuardAdmin],
      },
      {
        path: 'profesionales',
        component: ListaProfesionalesComponent,
        canActivate: [LoginGuardAdmin],
      },
    ],
  },
  {
    path: '',
    component: LayoutAgenciasComponent,
    children: [
      {
        path: 'agencias-solicitudes',
        component: AgengiasSolicitudesComponent,
        canActivate:[LoginGuardAgencia]
      },
    ],
  },
];
