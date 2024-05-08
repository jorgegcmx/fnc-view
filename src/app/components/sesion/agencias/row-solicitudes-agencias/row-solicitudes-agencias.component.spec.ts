import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSolicitudesAgenciasComponent } from './row-solicitudes-agencias.component';

describe('RowSolicitudesAgenciasComponent', () => {
  let component: RowSolicitudesAgenciasComponent;
  let fixture: ComponentFixture<RowSolicitudesAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowSolicitudesAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowSolicitudesAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
