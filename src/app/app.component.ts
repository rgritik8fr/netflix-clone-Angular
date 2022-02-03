import { Component } from '@angular/core';
import { MovieService } from './Service/movie.service';
import { ALL_DATA } from './json/files';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Al';
  faq :any = []; 

  constructor(private movieData:MovieService){
    this.movieData.getData().subscribe((data)=>{
      
    })
    
  }


}
