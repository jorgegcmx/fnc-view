import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../../interfaces/curso';
import { LoginService } from '../../../services/login/login.service';
import { PagosPayComponent } from '../../global/pagos-pay/pagos-pay.component';


@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, PagosPayComponent],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent implements OnInit {

  public DataCursos$!: Observable<any[]>;
  nombre!: string;
  buscar!: string;
  requestDetalle!: DetalleCursosProfecionales;

  constructor(private service: ServiceService, private loginservice: LoginService) {
    this.nombre = '1';
    this.buscar = '';
    this.requestDetalle = new DetalleCursosProfecionales();
  }

  ngOnInit() {
    this.DataCursos$ = this.service.getCursos(this.nombre).pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }));
  }

  buscarLista() {
    this.DataCursos$ = this.service.getCursos(this.buscar).pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }));
  }
  buscarTodos() {
    this.DataCursos$ = this.service.getCursos(this.nombre).pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }));
  }

  registro(cursos: Curso) {
    this.requestDetalle.idarticulo = cursos.idarticulos;
    this.requestDetalle.costo = cursos.precio_mayoreo;
    this.requestDetalle.idprofecional = Number(this.loginservice.getID().toString());
    this.service.saveDetalleCursosProfesionales(this.requestDetalle).subscribe((res) => {
      alert(res.smg);
    });
  }
}

export class DetalleCursosProfecionales {
  id: any
  idarticulo: number
  nocertificado: any
  fecha: any
  costo: number
  idprofecional: number
  estatus: string
  constructor() {
    this.id = null;
    this.idarticulo = 0;
    this.nocertificado = null;
    this.fecha = null;
    this.costo = 0;
    this.idprofecional = 0;
    this.estatus = 'R';
  }
}