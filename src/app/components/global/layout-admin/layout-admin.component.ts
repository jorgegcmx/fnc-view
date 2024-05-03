import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarNavAdminComponent } from '../navbar-nav-admin/navbar-nav-admin.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,NavbarNavAdminComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

}
