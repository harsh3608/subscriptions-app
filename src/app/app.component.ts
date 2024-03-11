import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isUserLoggedIn = false;
  sidebarVisible: boolean = false;
  userName: string = "";

  constructor() { }

  ngOnInit(): void {

  }




  login() {
    
  }


  logout() {

  }




}
