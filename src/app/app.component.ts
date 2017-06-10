import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "app/authentication/auth.service";
@Component({
  selector: 'daily-deals',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daily Deals';
  constructor(private authService: AuthService) { }
}
