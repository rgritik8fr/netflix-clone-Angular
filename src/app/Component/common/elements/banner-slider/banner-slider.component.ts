import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent implements OnInit {
@Input() sliderImg:string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
