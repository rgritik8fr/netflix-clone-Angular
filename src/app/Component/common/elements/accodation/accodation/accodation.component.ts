import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accodation',
  templateUrl: './accodation.component.html',
  styleUrls: ['./accodation.component.css']
})
export class AccodationComponent implements OnInit {
  @Input() accTitle:String;
  @Input() accDescription:String;


  constructor() { }

  ngOnInit(): void {
    console.log(this.accDescription);
    
  }

}
