import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {
  form: any ={
    Id:"",
  name:"",
  price:"",
  };
  products:any[]=[];
  total:any="";
  constructor() { }


  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.form);
    this.products.push({...this.form})

    this.total = this.products.reduce((total,product)=>{
      return (total += +product.price)
    },0)
    
  }
  
}
