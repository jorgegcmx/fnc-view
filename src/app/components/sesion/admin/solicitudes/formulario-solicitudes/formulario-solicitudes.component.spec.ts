import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSolicitudesComponent } from './formulario-solicitudes.component';

describe('FormularioSolicitudesComponent', () => {
  let component: FormularioSolicitudesComponent;
  let fixture: ComponentFixture<FormularioSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
