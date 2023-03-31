import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-alters',
  templateUrl: './alters.component.html',
  styleUrls: ['./alters.component.css']
})
export class AltersComponent implements OnInit {

  constructor(private http:HttpClient, private dtshr:DatasharingService) {}

  characterAlters:any[] = []
  characterName:string = ""
  characterStatus:string = ""

  alters:any[] = []

  ngOnInit(): void {
    
    this.characterAlters = this.dtshr.getAlters()
    this.characterName = this.characterAlters[0].name
    this.characterStatus = this.characterAlters[0].status
    
    let index = this.characterName.indexOf(' ');
    let name = (index == -1) ? this.characterName : this.characterName.substring(0, index)

    this.http.get("https://rickandmortyapi.com/api/character/?name="+name+"&status="+this.characterStatus)
    .subscribe((alters:any) => {
      
      this.alters = alters.results

      // console.log(alters)
    })
  }

}


