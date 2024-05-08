import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegistroCursoComponent } from './btn-registro-curso.component';

describe('BtnRegistroCursoComponent', () => {
  let component: BtnRegistroCursoComponent;
  let fixture: ComponentFixture<BtnRegistroCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRegistroCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnRegistroCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
