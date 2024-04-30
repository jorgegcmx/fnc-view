import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  User: any;
  UserId: any;
  constructor(private service: LoginService) {
    this.User = '';
    this.UserId = undefined;
  }

  ngOnInit() {
    this.User = this.service.getEmail();
    this.UserId = this.service.getID();
  }


}
