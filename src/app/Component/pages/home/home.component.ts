import { Component, OnInit } from '@angular/core';
import { avengergirl, children, rajma, tvImg} from 'src/app/helper/helper';
import { tvvideo } from 'src/app/helper/video';
import { ALL_DATA } from 'src/app/json/files';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOmeComponent implements OnInit {

  faqdata:any[]=ALL_DATA[0].faq;
  constructor() { }
  tvimg = tvImg;
  tvvideo = tvvideo;
  avengergirl =avengergirl
  videoShowing = true;
  rajma = rajma;
  children = children


  ngOnInit(): void {
    console.log(this.faqdata);
    
  }

}
