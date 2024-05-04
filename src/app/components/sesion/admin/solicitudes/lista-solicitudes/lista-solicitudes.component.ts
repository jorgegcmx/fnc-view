import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { InfoProfecional } from '../../../../../interfaces/info-profecional';
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
  nombre!: string;

  public DataHistorial$!: Observable<Solicitudes>;
  constructor(
    private service: ServiceService,
    private servicelogin: LoginService
  ) {
    this.servicelogin.getID();
  }

  ngOnInit(): void {
    this.DataHistorial$ = this.service.getlistaSolicitudes().pipe(
      catchError((error: string) => {
        return EMPTY;
      })
    );
  }

  buscarLista() {
    /*
    this.DataHistorial$ = this.service.getCursos(this.buscar).pipe(
      catchError((error: string) => {
        console.log(error);
        return EMPTY;
      })
    );
    */
  }
  buscarTodos() {
    this.DataHistorial$ = this.service.getlistaSolicitudes().pipe(
      catchError((error: string) => {
        return EMPTY;
      })
    );
  }
}
