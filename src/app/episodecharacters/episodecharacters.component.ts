import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-episodecharacters',
  templateUrl: './episodecharacters.component.html',
  styleUrls: ['./episodecharacters.component.css']
})
export class EpisodecharactersComponent implements OnInit {

  constructor(private http:HttpClient, private dtshr:DatasharingService) {}

  arr:any[] = []
  episodeCharacters:any[] = []

  episodeName:string = ""

  ngOnInit(): void {
    
    this.episodeCharacters = this.dtshr.getCharacters()
    this.episodeName = this.episodeCharacters[0].name
  
    for(let i of this.episodeCharacters[0].characters){
      this.http.get(i)
      .subscribe((characters:any) => {
        this.arr.push(characters)
      })
    }

  //  console.log(this.arr)
  }
}
