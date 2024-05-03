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


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
        component: ListaSolicitudesComponent
      },
      {
        path: 'cursos',
        component: ListaDeCursosComponent
      },
      {
        path: 'agencias',
        component: ListaAgeciasComponent
      },
      {
        path: 'profesionales',
        component: ListaProfesionalesComponent
      },
    ],
  },
];
