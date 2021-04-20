import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './Modules/domangular/product-list/product-list.component';

@Component({
  selector: 'app-root', // tên thẻ 
  //template: thành phần giao diện của thẻ
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']// đường dẫn dến file css của thẻ
})

//xử lý các nút trên giao diện của thẻ <app-root>
export class AppComponent {
  title = 'angular';
  @ViewChild('btnAddProduct') tagBtnAdd:any;
  @ViewChild('tagDSSP') tagDSSP: ProductListComponent;
  addProduct():void{
    console.log(this.tagBtnAdd.nativeElement.id);
    this.tagBtnAdd.nativeElement.className = "btn btn-danger";
    


  }
}
