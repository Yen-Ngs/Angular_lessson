import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from '../product/product.component';
interface Product{
  ID:number;
  name:string;
  price:number;
  photo:string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productArray:Product[] =[
    {ID:1,name:'IphoneX',price:1000,photo:'https://picsum.photos/200' },
    {ID:2,name:'IphoneXS',price:2000,photo:'https://picsum.photos/200' },
    {ID:3,name:'IphoneXS Max',price:3000,photo:'https://picsum.photos/200' }
  ];

  @ViewChildren(ProductComponent) listTagProduct: QueryList<ProductComponent>

  constructor() { }
  changePrice(){
    let arrayTagProduct = this.listTagProduct.toArray() // DOM to tags <app-product></app-product>
    // arrayTagProduct[1].product.price =1000000
    this.listTagProduct.forEach((item:ProductComponent,index:number)=>{
      if(item.product.ID ===2){
        item.product.price =1000
      }
    })
  }

  ngOnInit(): void {
  }

}
