import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() getImgSrc: any;
  constructor() {}

  img: string;
  ngOnInit(): void {}

  getSrc() {
    return `https://image.tmdb.org/t/p/w1280/${this.getImgSrc.backdrop_path}`;
  }

  gettitle() {
    return this.getImgSrc.original_title;
  }

  
}
