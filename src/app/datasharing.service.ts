import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor() { }

  characterAlters:any[] = []
  episodeCharacters:any[] = []
  residents:any[] = []

  altersSubscriber(info:any){
    this.characterAlters = []
    this.characterAlters.push(info)
  }
  getAlters(){
    return this.characterAlters
  }


  charactersSubscriber(info:any){
    this.episodeCharacters = []
    this.episodeCharacters.push(info)
  }
  getCharacters(){
    return this.episodeCharacters
  }


  residentsSubscriber(info:any){
    this.residents = []
    this.residents.push(info)
  }
  getResidents(){
    return this.residents
  }

}
