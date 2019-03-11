import { Component, Input }  from '@angular/core';
import { CardComponent } from './card.component';


@Component({
  selector: 'activity-card',
  template: `
    <div class="card bpack_card-item" style="background-image:">
      <div class="card-image">
        <img src="../../../assets/img/{{ data.img ? data.img : 'graybag.png' }}">
        <span class="bpack_favorite-icon">
          <i class="material-icons">{{ data.favorite ? 'favorite' : 'favorite_border'}}</i>
        </span>
      </div>
      <div class="bpack_card-content">
        <h6>{{ data.name }}</h6>
        <p>SR {{ data.price }} per indivdual </p>
        <ratings [ratings]="data.rating"></ratings>
      </div>
    </div>
  `,
  styles:[`
    .bpack_card-item{
      box-shadow: 2px 0px 5px 1px #f3f3f3;
      border: 1px solid #cccccc59;
      border-radius: 5px;
      transition: all .2s ease-in-out;
    }
    .bpack_card-item .card-image{
      height: 140px;
    }
    .bpack_card-item img{
      height: 100%;
    }
    .bpack_card-item:hover{
       transform: scale(1.02);
    }
    .bpack_favorite-icon {
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
    }
    .bpack_favorite-icon{
      color: #df6752;
      font-size: 15px;
    }
    .bpack_card-content{
      padding: 0 10px;
      display: block;
      height: 75px;
    }
    .bpack_card-content h6{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .bpack_card-content p{
      font-size: 12px;
      margin: 5px 0;
    }
  `]
})

export class ActivityCardComponent implements CardComponent{
  @Input() data: any;
}
