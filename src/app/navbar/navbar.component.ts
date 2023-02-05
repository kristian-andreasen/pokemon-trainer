import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  get user(): User | undefined {
    return this.userService.user;
  }
  constructor(private readonly userService: UserService) {}
}
