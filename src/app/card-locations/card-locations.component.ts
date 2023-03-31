import { Component, Input } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-card-locations',
  templateUrl: './card-locations.component.html',
  styleUrls: ['./card-locations.component.css']
})
export class CardLocationsComponent {

  constructor(private dtshr:DatasharingService) {}

  @Input() info:any

  residents(){
    this.dtshr.residentsSubscriber(this.info)

    // console.log(this.info)
  }
}
