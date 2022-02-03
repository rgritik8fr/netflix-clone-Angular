import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
@Input() type:string;
@Input() value:string;
  constructor() { }

  ngOnInit(): void {
  }


}
