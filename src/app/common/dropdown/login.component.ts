import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown-login',
  template: `
    <div  class="bpack_profile-dropdown">
      <div class="dropdown_wrapper">
        <input type="text" placeholder="Enter your phone number">
        <div class="button-set">
          <a href="#" (click)="logUser()">login</a>
          <a href="#" (click)="regUser()">register</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    input{
      border: 2px solid #ccc !important;
      box-shadow: none !important;
      padding-left: 15px !important;
      border-radius: 3px !important;
      width: 100% !important;
      position: relative !important;
      box-sizing: border-box !important;
    }

  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logUser(){
    console.log('you click on login button');
  }

  regUser(){
    console.log("you clicked on register User")
  }

}
