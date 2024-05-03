import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCursosComponent } from './formulario-cursos.component';

describe('FormularioCursosComponent', () => {
  let component: FormularioCursosComponent;
  let fixture: ComponentFixture<FormularioCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
