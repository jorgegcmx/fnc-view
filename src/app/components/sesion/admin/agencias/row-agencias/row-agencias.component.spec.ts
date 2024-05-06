import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowAgenciasComponent } from './row-agencias.component';

describe('RowAgenciasComponent', () => {
  let component: RowAgenciasComponent;
  let fixture: ComponentFixture<RowAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
