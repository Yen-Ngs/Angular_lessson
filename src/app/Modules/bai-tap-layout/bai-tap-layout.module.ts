import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapLayoutComponent } from 'src/app/bai-tap-layout/bai-tap-layout.component';
import { ContentComponent } from 'src/app/bai-tap-layout/content/content.component';
import { FooterComponent } from 'src/app/bai-tap-layout/footer/footer.component';
import { HeaderComponent } from 'src/app/bai-tap-layout/header/header.component';
import { SideBarComponent } from 'src/app/bai-tap-layout/side-bar/side-bar.component';



@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BaiTapLayoutComponent],// xuất component ra để khi umport module này vào module này vào module khác thì component này có thể sử dụng trong module khác 
})
export class BaiTapLayoutModule { }
