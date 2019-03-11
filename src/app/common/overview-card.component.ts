import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'overview-card',
  template: `
    <div class="card bpack_card-item">
      <div class="custom-content">
        <h6>Hiking in Khulais</h6>
        <ul>
          <li><a href="#">View all (21 Tickets)</a></li>
          <li>
            <div class="message-link">
              <span>Message all</span>
              <span><i class="material-icons">chat_bubble_outline</i></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles:[`

    .custom-content {
      padding: 5px 20px;
    }
    .message-link span{
      font-size: 11px;
    }
    ul{
      margin: 5px 0 10px;
    }
    ul li{
      display: inline-block;
      width: 50%;
      height: 30px;
      line-height: 3;
    }
    ul li a{
      color: #83267E;
      font-size: 12px;
    }
    .message-link {
      opacity: .6;
    }
    .message-link i {
      position: relative;
      top: 10px;
      left: 5px;
    }
    ul li:last-child{
      text-align: right;
    }
  `]
})

export class OverviewCardComponent implements OnInit{
  // @Input() data: any;
  ngOnInit() {
  }
}
