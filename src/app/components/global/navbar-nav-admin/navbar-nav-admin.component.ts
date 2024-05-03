import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-nav-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-nav-admin.component.html',
  styleUrl: './navbar-nav-admin.component.css'
})
export class NavbarNavAdminComponent {

}
