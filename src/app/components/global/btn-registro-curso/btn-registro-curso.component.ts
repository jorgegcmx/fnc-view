import { Component, Input } from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-registro-curso',
  standalone: true,
  imports: [],
  templateUrl: './btn-registro-curso.component.html',
  styleUrl: './btn-registro-curso.component.css',
})
export class BtnRegistroCursoComponent {
  @Input() costo!: string;
  @Input() idarticulo!: string;
  requestDetalle!: DetalleCursosProfecionales;
  constructor(
    private service: ServiceService,
    private loginservice: LoginService,
    private router: Router
  ) {
    this.requestDetalle = new DetalleCursosProfecionales();
  }

  registro() {
    this.requestDetalle.idarticulo = Number(this.idarticulo);
    this.requestDetalle.costo = Number(this.costo);
    this.requestDetalle.idprofecional = Number(
      this.loginservice.getID().toString()
    );
    this.service
      .saveDetalleCursosProfesionales(this.requestDetalle)
      .subscribe((res) => {
        alert(res.smg);
        this.router.navigate(['/dashboard']);
      });
  }
}

export class DetalleCursosProfecionales {
  id: any;
  idarticulo: number;
  nocertificado: any;
  fecha: any;
  costo: number;
  idprofecional: number;
  estatus: string;
  id_pay: any;
  status_pay: any;
  nombre_pay: any;
  email_pay: any;
  total_pay: any;
  method_pay: any;
  constructor() {
    this.id = null;
    this.idarticulo = 0;
    this.nocertificado = null;
    this.fecha = null;
    this.costo = 0;
    this.idprofecional = 0;
    this.estatus = 'R';
    this.id_pay = null;
    this.status_pay = null;
    this.nombre_pay = null;
    this.email_pay = null;
    this.total_pay = null;
    this.method_pay = null;
  }
}
