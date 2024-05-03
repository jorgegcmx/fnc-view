import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/profesionales/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { InfoProfecional } from '../../../../interfaces/info-profecional';
import { CommonModule, NgFor } from '@angular/common';
import { LoginService } from '../../../../services/login/login.service';

@Component({
  selector: 'app-mis-certificaciones',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './mis-certificaciones.component.html',
  styleUrl: './mis-certificaciones.component.css'
})
export class MisCertificacionesComponent implements OnInit {

  UserId: string;
  public DataHistorial$!: Observable<InfoProfecional>;
  constructor(private service: ServiceService, private servicelogin: LoginService) {
    this.servicelogin.getID();
    this.UserId = '1';
  }

  ngOnInit(): void {
    console.log(this.servicelogin.getID());
    this.DataHistorial$ = this.service.getDataById(this.servicelogin.getID()).pipe(catchError((error: string) => {
      //console.log(error);
      return EMPTY;
    }));
  }
}
