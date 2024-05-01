import { Routes } from '@angular/router';
import { LoginComponent } from './components/global/login/login.component';
import { LayoutComponent } from './components/global/layout/layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { TablaComponent } from './components/profesionales/tabla/tabla.component';
import { RegistroComponent } from './components/global/registro/registro.component';
import { ForgotPasswordComponent } from './components/global/forgot-password/forgot-password.component';
import { MisCertificacionesComponent } from './components/sesion/profecionales/mis-certificaciones/mis-certificaciones.component';
import { ListaCursosComponent } from './components/cursos/lista-cursos/lista-cursos.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "registro",
        component: RegistroComponent
    },
    {
        path: "forgot-password",
        component: ForgotPasswordComponent
    },
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "dashboard",
                component: MisCertificacionesComponent
            },
            {
                path: "lista_cuersos",
                component: ListaCursosComponent
            }
        ]
    }
];
