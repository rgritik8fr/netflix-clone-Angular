import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Service/movie.service';


@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css'],
})
export class AuthHomeComponent implements OnInit {
  slidersBanner: any[] = [];
  cardData: any[] = [];
  cardDatav2: any[] = [];

  constructor(private Sliders: MovieService, private datav2: MovieService, private datav3: MovieService) {
    this.Sliders.getData().subscribe((data) => {
      this.slidersBanner.push(data);
    });

    this.datav2.getDatav2().subscribe((data=>{
      this.cardData.push(data)
    }));

    this.datav3.getDatav3().subscribe((data=>{
      this.cardDatav2.push(data)
    }))
  }

  ngOnInit(): void {}

  getData() {
   try{
    return this.slidersBanner[0].results;
   }
   catch{
     return []
   }
  }

  getDatav2() {
    try{
    return this.cardData[0].results;
    }
    catch{
      return []
    }
  }

  getDatav3() {
    try{
    return this.cardDatav2[0].results;
    }
    catch{
      return []
    }
  }
}
