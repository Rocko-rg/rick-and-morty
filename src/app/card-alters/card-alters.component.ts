import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-alters',
  templateUrl: './card-alters.component.html',
  styleUrls: ['./card-alters.component.css']
})
export class CardAltersComponent {

  @Input() info:any
}
