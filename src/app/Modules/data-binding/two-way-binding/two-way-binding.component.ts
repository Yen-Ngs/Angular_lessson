import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  userName:string = '';
  email: string ="";
  color:string ="red"

  constructor() { }

  ngOnInit(): void {
  }
  changeUserName(evt : any){
    console.log(evt.target.value);
    this.userName=evt.target.value
  };
}
