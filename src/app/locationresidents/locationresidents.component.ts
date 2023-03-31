import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-locationresidents',
  templateUrl: './locationresidents.component.html',
  styleUrls: ['./locationresidents.component.css']
})
export class LocationresidentsComponent implements OnInit {
  
  constructor(private http:HttpClient, private dtshr:DatasharingService) {}
  
  arr:any[] = []
  residents:any[] = []

  locationName:string = ""

  ngOnInit(): void {
    
    this.residents = this.dtshr.getResidents()
    this.locationName = this.residents[0].name
  
    for(let i of this.residents[0].residents){
      this.http.get(i)
      .subscribe((residents:any) => {
        this.arr.push(residents)
      })
    }
  //console.log(this.arr)
  }
}
