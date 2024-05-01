import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-nav.component.html',
  styleUrl: './navbar-nav.component.css'
})
export class NavbarNavComponent {

}
