import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit{

  constructor( private http:HttpClient) { }

  pageURLs:any[] = []

  locationsArr:any[] = []
  locationsArr1:any[] = []
  typeArr: any[] = []

  type:any = ""

  url:string = "https://rickandmortyapi.com/api/location"

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe((locations:any) => {
      
      let next = locations.info.next
      let prev = locations.info.prev
      let pages = locations.info.pages
      this.pageURLs = []
      this.pageURLs.push(next, prev, pages)
    
      this.locationsArr = locations.results
      this.locationsArr1 = locations.results

      this.typeArr = Array.from(new Set(this.locationsArr1.map(i => i.type)))

      // console.log(this.locationsArr1)
    })
  }


  // Filters
  filters(){
    let t = this.locationsArr1.filter(i => i.type == this.type)
    if(this.type != ""){
      this.locationsArr = t
    }
    else{
      this.locationsArr = this.locationsArr1
    }
  }

  // Pagination
  NextPrevPagesSubscriber(url:any){
    this.url = url
    this.ngOnInit()
    this.type = ""
  }
}
