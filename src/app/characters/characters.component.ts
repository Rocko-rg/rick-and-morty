import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor( private http:HttpClient) { }

  pageURLs:any[] = []

  charactersArr:any[] = []
  charactersArr1:any[] = []

  speciesArr:any[] = []
  genderArr:any[] = []

  name:any = ""
  species:any = ""
  gender:any = ""
  
  url:string = "https://rickandmortyapi.com/api/character"
  
  ngOnInit(): void {

    this.http.get(this.url)
    .subscribe((characters:any) => {
      
      let next = characters.info.next
      let prev = characters.info.prev
      let pages = characters.info.pages
      this.pageURLs = []
      this.pageURLs.push(next, prev, pages)

      this.charactersArr = characters.results
      this.charactersArr1 = characters.results

      this.speciesArr = Array.from(new Set(this.charactersArr1.map(i => i.species)))
      this.genderArr = Array.from(new Set(this.charactersArr1.map(i => i.gender)))

      // console.log(this.charactersArr)
    })
  }


  //Search
  search(){

    let n = this.charactersArr1.filter(i=> i.name.toLowerCase().startsWith(this.name.toLocaleLowerCase()))
    this.charactersArr = n
    this.species = ""
    this.gender = ""
  }

  // Filters
  filters(){

    let sg = this.charactersArr1.filter(i => i.species == this.species && i.gender == this.gender)
    let s = this.charactersArr1.filter(i => i.species == this.species)
    let g = this.charactersArr1.filter(i => i.gender == this.gender)

    if(this.species != "" && this.gender != ""){
      this.charactersArr = sg
      this.name = ""
    }
    else if(this.species != "" && this.gender == ""){
      this.charactersArr = s
      this.name = ""
    }
    else if(this.gender != "" && this.species == ""){
      this.charactersArr = g
      this.name = ""
    }
    else if(this.species == "" && this.gender == "" ){
      this.charactersArr = this.charactersArr1
    }
  }

  // Pagination
  NextPrevPagesSubscriber(url:any){
    this.url = url
    this.ngOnInit()
    this.name = ""
    this.species = ""
    this.gender = ""
  }
}