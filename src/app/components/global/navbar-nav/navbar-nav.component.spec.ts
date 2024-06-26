import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavComponent } from './navbar-nav.component';

describe('NavbarNavComponent', () => {
  let component: NavbarNavComponent;
  let fixture: ComponentFixture<NavbarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
