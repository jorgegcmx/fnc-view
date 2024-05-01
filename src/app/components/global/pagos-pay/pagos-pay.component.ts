import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';

declare var paypal: any;

@Component({
    selector: 'app-pagos-pay',
    standalone: true,
    imports: [],
    templateUrl: './pagos-pay.component.html',
    styleUrl: './pagos-pay.component.css'
})
export class PagosPayComponent implements OnInit {

    @ViewChild('paypal', { static: true })
    paypalElement!: ElementRef;

    ngOnInit(): void {
        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'blue',
                layout: 'vertical',
                label: 'pay',
            },
            createOrder: (data: any, actions: any) => {
                return actions.order.create({
                    purchase_units: [{ "amount": { "currency_code": "USD", "value": 20 } }]
                });
            },
            onApprove: function (data: any, actions: any) {
                return actions.order.capture().then(function (details:any) {             
    
                    const id = details.id;
                    const status = details.status;
                    const nombre = details.payer.name.given_name + ' ' + details.payer.name.surname;
                    const email = details.payer.email_address;
                    const total = details.purchase_units[0].amount.value;                  
                });
            },
            onError: function (err:any) {
                console.log(err);
            }
        }).render(this.paypalElement.nativeElement);
    }

}
