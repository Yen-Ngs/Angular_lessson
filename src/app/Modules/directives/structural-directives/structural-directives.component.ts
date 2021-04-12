import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean=true;
  isLoggedIn: boolean=false;
  color: string ="primary";
  students: any[]=[
    {name:"A", age:25},
    {name:"B", age:26},
    {name:"C", age:27}
  ]

  constructor() { }
  changeColor=(evt:any)=>{
    this.color = evt.target.value
  }

  ngOnInit(): void {
  }

}
