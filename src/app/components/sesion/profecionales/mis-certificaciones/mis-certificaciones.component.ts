import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { InfoProfecional } from '../../../../interfaces/info-profecional';

@Component({
  selector: 'app-mis-certificaciones',
  standalone: true,
  imports: [],
  templateUrl: './mis-certificaciones.component.html',
  styleUrl: './mis-certificaciones.component.css'
})
export class MisCertificacionesComponent implements OnInit {

  public DataHistorial$!: Observable<InfoProfecional>;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.DataHistorial$ = this.service.getDataById().pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }));

    console.log(this.DataHistorial$.subscribe(imems => {
      console.log(imems);

    }));

  }

}
