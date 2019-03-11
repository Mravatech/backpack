import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'verify-user',
  template: `
    <div  class="bpack_profile-dropdown">
      <div class="dropdown_wrapper login_verify-container">
        <div class="login_wrapper-title">
          <span class="back-icon"><i class="material-icons">arrow_back</i></span>
          <h6>Verify your mobile No.</h6>
        </div>
        <p>We have sent you 4-digits code via SMS for mobile number verification at,</p>
        <div class="display-contact">+966 567161718</div>
        <span class="display-error">wrong phone number?</span>
        <form>
          <ul class="login_wrapper-inputs-list">
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
          </ul>
          <button type="submit" class="btn-verify" (click)="verifyUser($event)">Verify</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login_wrapper-inputs-list {
      display: inline-block;
      margin-bottom: 1.5em;
    }
    .login_wrapper-inputs-list li{
      margin: 5px;
      width: 40px;
      height: 40px;
      line-height: 0;
    }
    input{
      border: 2px solid #ccc !important;
      box-shadow: none !important;
      border-radius: 3px !important;
      width: 100% !important;
      position: relative !important;
      box-sizing: border-box !important;
      padding: 5px !important;
      text-align: center;
      font-size: 20px;
      opacity: 0.6;
    }
    .back-icon i{
      line-height: 40px;
      height: 40px;
      color: #ee5547;
    }
  `]
})
export class VerifyComponent implements OnInit {

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
