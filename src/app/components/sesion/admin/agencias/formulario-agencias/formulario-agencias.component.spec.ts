import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgenciasComponent } from './formulario-agencias.component';

describe('FormularioAgenciasComponent', () => {
  let component: FormularioAgenciasComponent;
  let fixture: ComponentFixture<FormularioAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
