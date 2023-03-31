import { Component, Input } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-card-episodes',
  templateUrl: './card-episodes.component.html',
  styleUrls: ['./card-episodes.component.css']
})
export class CardEpisodesComponent {

  constructor(private dtshr:DatasharingService) {}

  @Input() info:any

  characters(){
    this.dtshr.charactersSubscriber(this.info)

    // console.log(this.info)
  }
}
