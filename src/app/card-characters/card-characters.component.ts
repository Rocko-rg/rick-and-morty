import { Component, Input } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.css']
})
export class CardCharactersComponent {

  constructor(private dtshr:DatasharingService) {}

  @Input() info:any

  alters(){
    this.dtshr.altersSubscriber(this.info)

    // console.log(this.info)
  }
}
