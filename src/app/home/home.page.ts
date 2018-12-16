import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private authService: AuthService) {}

  logOut() {
    this.authService.logoutUser();
  }
}
