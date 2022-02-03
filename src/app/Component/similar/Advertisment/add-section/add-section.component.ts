import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
@Input() src:string ="";
@Input() videoSrc:string ="";
@Input() videoShowing:Boolean;
@Input() reverseCol:Boolean

  constructor() { }

  ngOnInit(): void {
  }
  getReverseCol(){
    return this.reverseCol ? "flex-row-reverse" :''
  }
}
