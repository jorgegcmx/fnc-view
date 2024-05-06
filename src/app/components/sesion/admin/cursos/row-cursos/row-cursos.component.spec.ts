import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCursosComponent } from './row-cursos.component';

describe('RowCursosComponent', () => {
  let component: RowCursosComponent;
  let fixture: ComponentFixture<RowCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
