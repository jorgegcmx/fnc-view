import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ServiceService } from '../../../services/profesionales/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  disabled!:boolean
  smg!: Boolean
  text!: string
  password!: string
  ProfacionalObj: Profesional;
  public DataAgencias$!: Observable<any[]>;

  constructor(private service: ServiceService) {
    this.ProfacionalObj = new Profesional();
    this.password = '';
    this.smg = false;
    this.disabled=false;
  }

  ngOnInit(): void {
    this.getAgencias();
  }

  getAgencias() {
    this.DataAgencias$ = this.service.getDataAgencias().pipe(catchError((error: string) => {
      console.log(error);
      return EMPTY;
    }))
  }

  save() {
    this.disabled=true;
    if (this.ProfacionalObj.password.length > 0) {
      if (this.ProfacionalObj.password.trim() == this.password.trim()) {
        if (this.ProfacionalObj.nombrecliente.trim() != '' && this.ProfacionalObj.emailcliente.trim() != '') {
          this.service.getSaveProfecional(this.ProfacionalObj).subscribe((res) => {
            if (res.smg == '¡Se registro de forma correcta!') {
              this.text = res.smg;
              this.smg = true;
              this.disabled=false;
            }else{
              alert(res.smg);
              this.disabled=false;
            }
          });
        } else {
          alert("Todos los datos son requeridos!");
        }
      } else {
        alert("Las contraseñas no conciden!");
      }
    } else {
      alert("Todos los datos son requeridos!");
    }
  }

}

export class Profesional {
  fecha: string
  idagencia: String
  status: string
  password: string
  nombrecliente: string
  emailcliente: string
  activado: any
  constructor() {
    this.fecha = '';
    this.idagencia = '35';
    this.status = 'R';
    this.password = '';
    this.nombrecliente = '';
    this.emailcliente = '';
    this.activado = null;
  }
}
