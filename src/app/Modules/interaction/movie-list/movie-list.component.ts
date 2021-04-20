import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  //khi component con muốn nhận dữ liệu từ component cha, cần phải khai báo @Input() variable-name
  @Input() movies ={};
  @Output() onDel = new EventEmitter()

  selectedMovie: any =null;
  constructor() { }

  ngOnInit(): void {
  }
  selectMovie(movie:any){
    console.log(movie);
    this.selectedMovie = movie
    
  }
  deleteMovie(movieId:number){
    this.onDel.emit(movieId);

  }

}
