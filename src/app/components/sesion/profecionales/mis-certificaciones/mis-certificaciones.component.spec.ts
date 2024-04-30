import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCertificacionesComponent } from './mis-certificaciones.component';

describe('MisCertificacionesComponent', () => {
  let component: MisCertificacionesComponent;
  let fixture: ComponentFixture<MisCertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisCertificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
