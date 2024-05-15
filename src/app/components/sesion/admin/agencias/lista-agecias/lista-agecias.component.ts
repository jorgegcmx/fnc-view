import { Component } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ServiceService } from '../../../../../services/profesionales/service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowAgenciasComponent } from '../row-agencias/row-agencias.component';

@Component({
  selector: 'app-lista-agecias',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, RowAgenciasComponent],
  templateUrl: './lista-agecias.component.html',
  styleUrl: './lista-agecias.component.css',
})
export class ListaAgeciasComponent {
  public DataAgencias$!: Observable<any[]>;
  nombre!: string;
  buscar!: string;

  show!: boolean;
  Agencia!: AgeciasClass;
  disable!: boolean;

  constructor(private service: ServiceService) {
    this.nombre = '1';
    this.buscar = '';
    this.show = false;
    this.Agencia = new AgeciasClass();
  }

  ngOnInit() {
    this.DataAgencias$ = this.service.getAgencias(this.nombre).pipe(
      catchError((error: string) => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  buscarLista() {
    this.DataAgencias$ = this.service.getAgencias(this.buscar).pipe(
      catchError((error: string) => {
        console.log(error);
        return EMPTY;
      })
    );
  }
  buscarTodos() {
    this.DataAgencias$ = this.service.getAgencias(this.nombre).pipe(
      catchError((error: string) => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  showForm() {
    this.Agencia = new AgeciasClass();
    this.show = this.show == false ? true : false;
  }

  Guarda() {
    if (
      this.Agencia.email_cliente.trim() != '' &&
      this.Agencia.telefono.trim() != '' &&
      this.Agencia.direccion.trim() != '' &&
      this.Agencia.pais.trim() != '' &&
      this.Agencia.estado.trim() != '' &&
      this.Agencia.municipio.trim() != '' &&
      this.Agencia.razon_social.trim() != '' &&
      this.Agencia.tipo.trim() != ''
    ) {
      this.disable = true;
      this.service
        .guardaAgencias(this.Agencia)
        .pipe(
          catchError((error: string) => {
            console.log(error);
            this.disable = false;
            return EMPTY;
          })
        )
        .subscribe(() => {
          this.disable = false;
          this.show = false;
          this.buscarTodos();
        });
    } else {
      alert('¡Todos los datos son requeridos!');
    }
  }
}

export class AgeciasClass {
  idclientes: any;
  email_cliente: string;
  contrasena_cliente: any;
  telefono: string;
  direccion: string;
  pais: string;
  estado: string;
  municipio: string;
  rfc: any;
  razon_social: string;
  idusuarios_admin: number;
  tipo: string;
  estatus: string;

  constructor() {
    this.idclientes = null;
    this.email_cliente = '';
    this.contrasena_cliente = null;
    this.telefono = '';
    this.direccion = '';
    this.pais = '';
    this.estado = '';
    this.municipio = '';
    this.rfc = null;
    this.razon_social = '';
    this.idusuarios_admin = 2;
    this.tipo = '';
    this.estatus = 'ACTIVA';
  }
}
