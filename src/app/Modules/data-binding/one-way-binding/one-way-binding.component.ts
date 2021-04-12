import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {
  
  //MVVM: model view view model
  //tat ca thuoc tinh cua component la state
  name:string ='cybersoft'
  imgSrc:string='https://picsum/photos/200/200'
  constructor() { }


  showTitile =()=>{
    return 'cybersoft'

  }
  changeName =(value:string)=>{
    this.name =value
    ;
  }

  ngOnInit(): void {
  }

}
