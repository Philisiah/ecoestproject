import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  login() {

  }

  goToDashboard() {

  }

  signOut() {

  }
}
