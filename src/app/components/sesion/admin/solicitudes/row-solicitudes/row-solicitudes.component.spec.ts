import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSolicitudesComponent } from './row-solicitudes.component';

describe('RowSolicitudesComponent', () => {
  let component: RowSolicitudesComponent;
  let fixture: ComponentFixture<RowSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
