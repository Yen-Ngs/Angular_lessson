import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên thẻ 
  //template: thành phần giao diện của thẻ
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']// đường dẫn dến file css của thẻ
})

//xử lý các nút trên giao diện của thẻ <app-root>
export class AppComponent {
  title = 'angular';
}
