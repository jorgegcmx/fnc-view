import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgeciasComponent } from './lista-agecias.component';

describe('ListaAgeciasComponent', () => {
  let component: ListaAgeciasComponent;
  let fixture: ComponentFixture<ListaAgeciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAgeciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAgeciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
