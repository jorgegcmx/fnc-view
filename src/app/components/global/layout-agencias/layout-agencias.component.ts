import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarNavAgenciasComponent } from '../navbar-nav-agencias/navbar-nav-agencias.component';

@Component({
  selector: 'app-layout-agencias',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,NavbarNavAgenciasComponent],
  templateUrl: './layout-agencias.component.html',
  styleUrl: './layout-agencias.component.css'
})
export class LayoutAgenciasComponent {

}
