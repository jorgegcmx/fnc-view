import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAgenciasComponent } from './layout-agencias.component';

describe('LayoutAgenciasComponent', () => {
  let component: LayoutAgenciasComponent;
  let fixture: ComponentFixture<LayoutAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
