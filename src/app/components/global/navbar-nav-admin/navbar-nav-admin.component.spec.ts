import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavAdminComponent } from './navbar-nav-admin.component';

describe('NavbarNavAdminComponent', () => {
  let component: NavbarNavAdminComponent;
  let fixture: ComponentFixture<NavbarNavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarNavAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarNavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
