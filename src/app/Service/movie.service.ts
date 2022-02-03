import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 url =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(Math.random()*100)}`

 urlv2 =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(Math.random()*50)}`

 urlv3 =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(Math.random()*20)}`


  constructor(private movieData: HttpClient) { }

  getData(){
    return this.movieData.get(this.url);
  }

  getDatav2(){
    return this.movieData.get(this.urlv2);
  }

  getDatav3(){
    return this.movieData.get(this.urlv3);
  }

}
