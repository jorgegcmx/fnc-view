import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Solicitud } from '../../../../interfaces/solicitudes';
import { PagosPayComponent } from '../../../global/pagos-pay/pagos-pay.component';

@Component({
  selector: '[solicitud]',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, PagosPayComponent],
  templateUrl: './row-solicitudes-agencias.component.html',
  styleUrl: './row-solicitudes-agencias.component.css',
})
export class RowSolicitudesAgenciasComponent {
  @Input() solicitud!: Solicitud;
  id!: number;
  idarticulo!: number;
  costo!: number;
  idprofecional!: number;
  showPaypalButton!: boolean;

  Pay(item: Solicitud) {
    this.showPaypalButton = this.showPaypalButton == true ? false : true;
    this.id = item.id;
    this.idarticulo = item.idarticulo;
    this.costo = item.costo;
    this.idprofecional = item.idprofecional;
  }
}
