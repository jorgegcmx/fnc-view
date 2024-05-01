import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPayComponent } from './pagos-pay.component';

describe('PagosPayComponent', () => {
  let component: PagosPayComponent;
  let fixture: ComponentFixture<PagosPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagosPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagosPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
