import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'filter-activities',
  template: `
    <div class="filter-dropdown_container">
      <div class="filter_wrapper">
        <h5>activities for</h5>
        <div class="wrapIt">
          <div class="fcheck_option">
            <h6>Families</h6>
            <p>Family friendly activities. Kids would enjoy it as much as sdults</p>
            <span>
              <label><input type="checkbox" class="filled-in" /><span></span></label>
            </span>
          </div>
          <div class="fcheck_option">
            <h6>Female Only</h6>
            <p>Thinking of a girls day/night out? This is for only Female activities. </p>
            <span>
              <label><input type="checkbox" class="filled-in" /><span></span></label>
            </span>
          </div>
          <div class="fcheck_option">
            <h6>Male Only</h6>
            <p>You and the guys will enjoy your time in our only for men trips</p>
            <span>
              <label><input type="checkbox" class="filled-in" /><span></span></label>
            </span>
          </div>
          <div class="fcheck_option">
            <h6>Group Trips</h6>
            <p>An well organized trip for your big group of friends. </p>
            <span>
              <label><input type="checkbox" class="filled-in" /><span></span></label>
            </span>
          </div>
          <div class="fcheck_option">
            <h6>Females & Males</h6>
            <p>A well organized trip for your big group of friends. </p>
            <span>
              <label><input type="checkbox" class="filled-in" /><span></span></label>
            </span>
          </div>
          <div class="divider"></div>
          <h5>price of Activity</h5>
          <div>
            <div class="">
              <h6>Male Only</h6>
              <p>You and the guys will enjoy your time in our only for men trips</p>
              <span>
                <label><input type="checkbox" class="filled-in" /><span></span></label>
              </span>
            </div>

          </div>

        </div>
        <button>33 activities</button>
      </div>
    </div>
  `,
  styles: [`

    .filter-dropdown_container{
      width: 319px;
      box-shadow: 0 2px 4px 0 #f3f3f3;
      border: 1px solid #DFE4EF;
      background-color: #FFFFFF;
      position: absolute;
      right: 2%;
      top: 55px;
      border-radius: 5px;
      color: #818181;
      line-height: 20px;
      max-height: 600px;
    }
    .filter-dropdown_container:before {
      border-bottom: 11px solid #F1EAE0;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      content: "";
      display: inline-block;
      position: absolute;
      top: -11px;
      left: 35px;
    }
    .filter-dropdown_container:after{
      border-bottom: 11px solid #FFFFFF;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      content: "";
      display: inline-block;
      position: absolute;
      top: -10px;
      left: 35px;
    }
    .filter_wrapper{
      padding: 1.5em;
      height: 590px;
      overflow-y: scroll;
    }
    .wrapIt{
      width: 100%;
      padding-right: 25%;
      overflow: scroll;
    }
    h5 {
      font-size: 1.2em;
      text-transform: capitalize;
      margin-top: 0;
    }
    h6{
      font-size: 1em;
      text-transform: capitalize;
    }
    p{
      font-size: 12px;
      font-weight: 100;
      color: #818181;
    }

    .fcheck_option{
      position: relative;
      margin-bottom: 20px;
    }
    .fcheck_option label > span{
      position: absolute;
      right: -65px;
      top: 30px;
    }
    .divider{
      border-bottom: 1px solid #D9D9D9 !important;
      width: 270px;
      display: block;
      position: relative;
      opacity: .4;
      margin-bottom: 20px;
      float: left;
    }
    [type="checkbox"].filled-in:not(:checked) + span:not(.lever):after {
      height: 20px;
      width: 20px;
      background-color: transparent;
      border: 2px solid #f5f5f5;
      top: 0px;
      z-index: 0;
    }
    button{
      width: 100%;
      color: #FF5B4B;
      height: 45px;
      background-color: #fff;
      font-size: 16px;
      font-weight: 100;
      border-radius: 2px;
      border: 1px solid #FF5B4B;
      text-transform: capitalize;
      margin-top: 20px;
      transition: .2s ease-in-out;
    }
    button:hover{
      color: #fff;
      background-color: #FF5B4B;
      box-shadow: 0 2px 4px 0 #f3f3f3;
    }
  `]
})
export class FilterComponent implements OnInit {

  // @Input verified: boolean;
  //
  // private verifyUser = false;

  constructor() { }

  ngOnInit() {
  }

}
