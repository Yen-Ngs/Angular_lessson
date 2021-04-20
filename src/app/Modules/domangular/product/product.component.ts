import { Component, Input, OnInit, Output } from '@angular/core';

class Product { // class trừu tượng, không thể tạo đối tượng từ interface  
  //=> không thể new) 
  //khi implements(gần giống kế thừa )phải định nghĩa toàn bộ các phưuong thức của interface
  //các phương thức trong interface không được định nghĩa => sẽ được định nghĩa của thể từ class con implements
  ID:number;
  name:string;
  price:number;
  photo:string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
@Input() product: Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

}
