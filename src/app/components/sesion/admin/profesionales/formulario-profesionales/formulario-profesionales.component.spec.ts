import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfesionalesComponent } from './formulario-profesionales.component';

describe('FormularioProfesionalesComponent', () => {
  let component: FormularioProfesionalesComponent;
  let fixture: ComponentFixture<FormularioProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProfesionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
