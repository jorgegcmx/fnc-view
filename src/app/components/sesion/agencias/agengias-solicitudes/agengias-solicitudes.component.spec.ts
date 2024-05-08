import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgengiasSolicitudesComponent } from './agengias-solicitudes.component';

describe('AgengiasSolicitudesComponent', () => {
  let component: AgengiasSolicitudesComponent;
  let fixture: ComponentFixture<AgengiasSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgengiasSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgengiasSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
