import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {


  @Input() info:any
  @Output() pageEmitter:EventEmitter<any> = new EventEmitter()

  next:string = ""
  prev:string = ""
  url:string = ""
  page:any = 1
    
  nextPage(){
    this.next = this.info[0]
    this.url = this.next
    this.page = this.next.match(/\d+$/)
    this.pageEmitter.emit(this.url)
  }
  
  prevPage(){
    this.prev = this.info[1]
    this.url = this.prev
    this.page= this.prev.match(/\d+$/)
    this.pageEmitter.emit(this.url)
  }
}
