import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ServiceService } from '../../../../../services/profesionales/service.service';
import { LoginService } from '../../../../../services/login/login.service';
import { CommonModule, NgFor } from '@angular/common';
import { Solicitud, Solicitudes } from '../../../../../interfaces/solicitudes';
import { FormsModule } from '@angular/forms';
import { RowSolicitudesComponent } from '../row-solicitudes/row-solicitudes.component';

@Component({
  selector: 'app-lista-solicitudes',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, RowSolicitudesComponent],
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css',
})
export class ListaSolicitudesComponent implements OnInit {
  buscar!: string;
  nombre!: String;
  public DataHistorial$!: Observable<Solicitudes>;
  constructor(
    private service: ServiceService
  ) {
    this.nombre='1';

  }

  ngOnInit(): void {
    this.DataHistorial$ = this.service.getlistaSolicitudes(this.nombre).pipe(
      catchError((error: string) => {
        return EMPTY;
      })
    );
  }

  buscarLista() {
    this.DataHistorial$ = this.service.getlistaSolicitudes(this.buscar).pipe(
      catchError((error: string) => {
        return EMPTY;
      })
    );
  }
  buscarTodos() {
    this.DataHistorial$ = this.service.getlistaSolicitudes('1').pipe(
      catchError((error: string) => {
        return EMPTY;
      })
    );
  }
}
