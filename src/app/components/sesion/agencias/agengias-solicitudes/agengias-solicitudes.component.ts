import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Solicitudes } from '../../../../interfaces/solicitudes';
import { ServiceService } from '../../../../services/profesionales/service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RowSolicitudesAgenciasComponent } from '../row-solicitudes-agencias/row-solicitudes-agencias.component';
import { LoginService } from '../../../../services/login/login.service';

@Component({
  selector: 'app-agengias-solicitudes',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, RowSolicitudesAgenciasComponent],
  templateUrl: './agengias-solicitudes.component.html',
  styleUrl: './agengias-solicitudes.component.css',
})
export class AgengiasSolicitudesComponent implements OnInit {
  buscar!: string;
  nombreDefault!: String;
  idagencia!: string;
  public DataHistorial$!: Observable<Solicitudes>;
  constructor(private service: ServiceService,private loginservice:LoginService) {
    this.nombreDefault = '1';
    this.idagencia = this.loginservice.getID();
  }

  ngOnInit(): void {
    this.DataHistorial$ = this.service
      .getlistaSolicitudesAgencia(this.idagencia, this.nombreDefault)
      .pipe(
        catchError((error: string) => {
          return EMPTY;
        })
      );
  }

  buscarLista() {
    this.DataHistorial$ = this.service
      .getlistaSolicitudesAgencia(this.idagencia, this.buscar)
      .pipe(
        catchError((error: string) => {
          return EMPTY;
        })
      );
  }
  buscarTodos() {
    this.DataHistorial$ = this.service
      .getlistaSolicitudesAgencia(this.idagencia, this.nombreDefault)
      .pipe(
        catchError((error: string) => {
          return EMPTY;
        })
      );
  }
}
