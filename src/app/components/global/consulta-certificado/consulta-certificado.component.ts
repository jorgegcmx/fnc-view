import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../../services/profesionales/service.service';
import { Certificados } from '../../../interfaces/certificado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-certificado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consulta-certificado.component.html',
  styleUrl: './consulta-certificado.component.css'
})
export class ConsultaCertificadoComponent implements OnInit {
  @Input() cer!: any
  buscar!: String
  muestracer!: boolean
  loadding!: boolean
  certifocado!: Certificados

  constructor(private service: ServiceService, private route: ActivatedRoute) {}
  ngOnInit(): void {
  }

  buscarLista() {
    this.loadding = true;
    this.service.getCertificado(this.buscar).subscribe((res: Certificados) => {
      if (res.smg != 'success') {
        this.muestracer = false;
        alert(res.smg);
        this.loadding = false;
      } else {
        this.muestracer = true;
        this.certifocado = res;
        this.loadding = false;
      }
    });
  }
}
