import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgenciasComponent } from './login-agencias.component';

describe('LoginAgenciasComponent', () => {
  let component: LoginAgenciasComponent;
  let fixture: ComponentFixture<LoginAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAgenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
