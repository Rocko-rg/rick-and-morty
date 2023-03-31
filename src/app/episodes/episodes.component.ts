import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  constructor( private http:HttpClient) { }

  pageURLs:any[] = [] 

  episodesArr:any[] = []
  episodesArr1:any[] = []

  episode:any = ""
  air_date:any = ""

  url:string = "https://rickandmortyapi.com/api/episode"

  ngOnInit(): void {

    this.http.get(this.url)
    .subscribe((episodes:any) => {
      
      let next = episodes.info.next
      let prev = episodes.info.prev
      let pages = episodes.info.pages
      this.pageURLs = []
      this.pageURLs.push(next, prev, pages)

      this.episodesArr = episodes.results
      this.episodesArr1 = episodes.results

      // console.log(this.episodesArr)
    })
  }

  
  // Episode filter
  episodeFilters(){
    let e = this.episodesArr1.filter(i => i.episode == this.episode)
    if(this.episode != ""){
      this.episodesArr = e
      this.air_date = ""
    }
    else{
      this.episodesArr = this.episodesArr1
    }
  }

  // Air_data filter
  air_dataFilters(){
    let a = this.episodesArr1.filter(i => i.air_date == this.air_date)
    if(this.air_date != ""){
      this.episodesArr = a
      this.episode = ""
    }
    else{
      this.episodesArr = this.episodesArr1
    }
  }

  // Pagination
  NextPrevPagesSubscriber(url:any){
    this.url = url
    this.ngOnInit()
    this.episode = ""
    this.air_date= ""
  }
}
