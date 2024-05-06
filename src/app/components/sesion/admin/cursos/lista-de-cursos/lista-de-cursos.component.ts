import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ServiceService } from '../../../../../services/profesionales/service.service';
import { FormsModule } from '@angular/forms';
import { RowCursosComponent } from '../row-cursos/row-cursos.component';

@Component({
  selector: 'app-lista-de-cursos',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, RowCursosComponent],
  templateUrl: './lista-de-cursos.component.html',
  styleUrl: './lista-de-cursos.component.css'
})
export class ListaDeCursosComponent {
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
