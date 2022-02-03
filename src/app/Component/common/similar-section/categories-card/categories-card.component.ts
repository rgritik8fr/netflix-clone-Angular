import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css'],
})
export class CategoriesCardComponent implements OnInit {
  @Input() categoriesData: any;
  @Input() title : string;
  imgSrc: string[];

  constructor() {}

  ngOnInit(): void {}

  getDataCard() {
    return this.categoriesData;
  }

  getImgSrc() {
    return this.categoriesData;
   
    }
  }

