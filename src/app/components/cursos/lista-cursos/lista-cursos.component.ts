import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent implements OnInit {

  public DataCursos$!: Observable<any[]>;
  nombre!: string;

  constructor(private service: ServiceService) {
    this.nombre = '1';
  }

  ngOnInit(){
    console.log(this.nombre);
    
    this.DataCursos$ = this.service.getCursos(this.nombre).pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }))

  }

}
