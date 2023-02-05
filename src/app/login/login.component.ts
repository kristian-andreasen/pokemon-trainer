import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { User } from 'src/models/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //@Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService) { }

  public loginSubmit(loginForm: NgForm): void {

    //username
    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User | undefined) => {
          this.router.navigateByUrl("/catalogue")

        },
        error: () => {

        }
      })

  }
}
