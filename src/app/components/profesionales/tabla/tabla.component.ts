import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  public DataEntradas$!: Observable<any[]>;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getProfesionales();

  }

  getProfesionales() {
    this.DataEntradas$ = this.service.getData().pipe(catchError((error: string) => {
      console.log(error);      
      return EMPTY;
    }))


  }


}
