import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from '../../../../../interfaces/solicitudes';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../../../../services/profesionales/service.service';

@Component({
  selector: '[solicitud]',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './row-solicitudes.component.html',
  styleUrl: './row-solicitudes.component.css',
})
export class RowSolicitudesComponent {
  nocer!: string;
  fechacer!: string;
  @Input() solicitud!: Solicitud;

  constructor(private service: ServiceService) {}

  save() {
    this.solicitud.fecha = this.fechacer;
    this.solicitud.nocertificado = this.nocer;
    this.service.ActualizaSolicitud(this.solicitud).subscribe((res) => {
      console.log(res);
      this.solicitud.fecha = res.articulosdeprofecionales.fecha;
      this.solicitud.nocertificado = res.articulosdeprofecionales.nocertificado;
    });
  }
}
