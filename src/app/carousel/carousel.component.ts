import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor( private http:HttpClient) { }

  charactersArr:any[] = []
  arr:any[] = []
  randomcharacters:any[] = []

  ngOnInit(): void {

    this.http.get("https://rickandmortyapi.com/api/character/?page="+Math.floor(Math.random() * 42))
    .subscribe((characters:any) => {
      this.charactersArr = characters.results
      
      while(this.arr.length != 3){
        let rand = Math.floor(Math.random() * 20)
        if(this.arr.indexOf(rand) == -1){
          this.arr.push(rand)
        }  
      }

      this.randomcharacters.push(this.charactersArr[this.arr[0]], 
                                 this.charactersArr[this.arr[1]], 
                                 this.charactersArr[this.arr[2]])
      
      // console.log(this.randomcharacters)
    })
  }
}


