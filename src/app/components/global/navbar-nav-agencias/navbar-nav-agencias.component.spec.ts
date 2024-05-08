import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavAgenciasComponent } from './navbar-nav-agencias.component';

describe('NavbarNavAgenciasComponent', () => {
  let component: NavbarNavAgenciasComponent;
  let fixture: ComponentFixture<NavbarNavAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarNavAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarNavAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
