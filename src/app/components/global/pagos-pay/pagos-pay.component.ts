import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ServiceService } from '../../../services/profesionales/service.service';
import { LoginService } from '../../../services/login/login.service';

declare var paypal: any;

@Component({
  selector: 'app-pagos-pay',
  standalone: true,
  imports: [],
  templateUrl: './pagos-pay.component.html',
  styleUrl: './pagos-pay.component.css',
})
export class PagosPayComponent implements OnInit {
  @Input() id!: string;
  @Input() costo!: string;
  @Input() idarticulo!: string;
  @Input() idprofecional!: string;
  requestDetalle!: DetalleCursosProfecionales;
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor(
    private service: ServiceService,
    private loginservice: LoginService
  ) {
    this.requestDetalle = new DetalleCursosProfecionales();
  }

  ngOnInit(): void {
    paypal
      .Buttons({
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'pay',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.costo,
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            const id_pay = details.id;
            const status_pay = details.status;
            const nombre_pay =
              details.payer.name.given_name + ' ' + details.payer.name.surname;
            const email_pay = details.payer.email_address;
            const total_pay = details.purchase_units[0].amount.value;
            this.registro(
              id_pay,
              status_pay,
              nombre_pay,
              email_pay,
              total_pay,
              'PAYPAL'
            );
          });
        },
        onError: (err: any) => {
          console.log(err);
          alert(
            '¡Error! al procesar tú pago, no se desconto el importe a tu cuenta, intenta con otro metodo de pago'
          );
        },
      })
      .render(this.paypalElement.nativeElement);
  }

  registro(
    id_pay: any,
    status_pay: any,
    nombre_pay: any,
    email_pay: any,
    total_pay: any,
    method_pay: any
  ) {
    this.requestDetalle.id = Number(this.id);
    this.requestDetalle.idarticulo = Number(this.idarticulo);
    this.requestDetalle.costo = Number(this.costo);
    this.requestDetalle.idprofecional = Number(this.idprofecional);
    this.requestDetalle.id_pay = id_pay;
    this.requestDetalle.status_pay = status_pay;
    this.requestDetalle.nombre_pay = nombre_pay;
    this.requestDetalle.email_pay = email_pay;
    this.requestDetalle.total_pay = total_pay;
    this.requestDetalle.method_pay = method_pay;
    console.log(this.requestDetalle);
    this.service
      .saveDetalleCursosProfesionales(this.requestDetalle)
      .subscribe((res) => {
        alert(res.smg);
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
