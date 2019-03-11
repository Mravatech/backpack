import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class ProHeaderComponent implements OnInit {

  showProfileDrop: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  profileSetting(){
    this.showProfileDrop = !this.showProfileDrop;
  }
}
