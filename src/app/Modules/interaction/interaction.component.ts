import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  movies:any[]=[
    {id:1,
    name:"Harry Porter",
    description:"abc",
    image:"assets/image/1.jpeg"
  },
  {id:2,
    name:"Emily in the Paris",
    description:"abc",
    image:"assets/image/2.jpeg"
  },
  {id:3,
    name:"Doremon",
    description:"abc",
    image:"assets/image/3.jpeg"
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  handleAddMovie(movie:any){
    this.movies.push(movie)
  }
  deleteMovie(movieId:number){
    this.movies = this.movies.filter((item)=>item.id !==movieId)
  }

}
