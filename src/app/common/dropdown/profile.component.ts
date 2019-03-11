import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'profile-dropdown',
  template: `
    <div  class="bpack_profile-dropdown">
      <ul>
        <li><a href="">My Account</a></li>
        <li><a href="">My Statistics</a></li>
        <li><a href="">Users & Roles</a></li>
        <li><a href="">Activities Settings</a></li>
        <li><a href="">Go to backpack</a></li>
        <li><a href="">Logout</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .bpack_profile-dropdown{
      width: 200px;
      padding: 1em .5em 0;
    }
    li{
      float: left;
      width: 100%;
      margin-bottom: 5px;
      height: 35px;
      line-height: 35px;
    }
    a{
      color: #4A4A4A;
      border-bottom: 1px solid #cccccc21;
      font-size: 13px;
      opacity: .7;
      background-color: #FFFFFF !important;
      transition: .2s ease-in-out;
    }
    a:hover{
      opacity: 1;
    }
    li:last-child a{
      border: none;
    }
  `]
})
export class ProfileComponent implements OnInit {

  // @Input verified: boolean;
  //
  // private verifyUser = false;

  constructor() { }

  ngOnInit() {
  }

  verifyUser(){
    event.preventDefault();
    console.log('Hellooo ')
  }
}
