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

  constructor(private service: ServiceService) {
    this.nombre = '1';
    this.buscar = '';
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
}
