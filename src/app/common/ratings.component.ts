import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ratings',
  template: `
    <span class="bpack_rating-stars">
      <i class="material-icons rated">star</i>
      <i class="material-icons">star</i>
      <i class="material-icons">star</i>
      <i class="material-icons">star</i>
      <i class="material-icons">star</i>
      <span class="rating-number">{{ ratings }} Rate</span>
    </span>
  `,
  styles: [`
    .bpack_rating-stars {
      display: block;
      overflow: hidden;
      height: 20px;
    }
    .bpack_rating-stars i {
      font-size: 15px;
      margin-right: 3px;
      color: #D9D9D9;
    }
    .bpack_rating-stars i.rated{
      color: #df6752;
    }
    .rating-number {
      font-size: 12px;
      margin-left: 5px;
      vertical-align: text-top;
    }
  `]
})
export class RatingsComponent implements OnInit {

  private _nOfratings = 0;

  ngOnInit() {
  }

  @Input()

  set ratings(ratings: number){
   this._nOfratings = ratings;
  }

  get ratings(): number { return this._nOfratings };

}
