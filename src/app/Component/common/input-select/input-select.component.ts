import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  @Input() type:string ="";
 
  constructor() { }

  ngOnInit(): void {
    }
    getInputType(){
     return this.type ==="searchBar" ? "search":''
    }
  }


