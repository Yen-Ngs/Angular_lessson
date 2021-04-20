import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:any ={};
  color:string = "pink";
  //onSelect là tên event (tự định nghĩa)
  //output: nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha 
  @Output() onSelect = new EventEmitter();
  @Output() onDel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  selectMovie(){
    //need to push movie has just clicked up to (MovieListComponent)
    //emit:kích hoạt event và đẩy lên component cha
    // có thể truyền kèm data trong hàm emit để component cha nhận được 
    this.onSelect.emit(this.movie)
  }
  deleteMovie(){
    this.onDel.emit(this.movie.id)

  }

}
