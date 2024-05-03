import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCertificadoComponent } from './consulta-certificado.component';

describe('ConsultaCertificadoComponent', () => {
  let component: ConsultaCertificadoComponent;
  let fixture: ComponentFixture<ConsultaCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaCertificadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
