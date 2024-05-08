import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagosPayComponent } from '../../global/pagos-pay/pagos-pay.component';
import { BtnRegistroCursoComponent } from '../../global/btn-registro-curso/btn-registro-curso.component';


@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, PagosPayComponent, BtnRegistroCursoComponent],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent implements OnInit {

  public DataCursos$!: Observable<any[]>;
  nombre!: string;
  buscar!: string; 

  constructor(private service: ServiceService) {
    this.nombre = '1';
    this.buscar = '';    
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

 
}

