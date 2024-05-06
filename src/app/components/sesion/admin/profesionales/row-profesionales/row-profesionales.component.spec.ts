import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowProfesionalesComponent } from './row-profesionales.component';

describe('RowProfesionalesComponent', () => {
  let component: RowProfesionalesComponent;
  let fixture: ComponentFixture<RowProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowProfesionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
