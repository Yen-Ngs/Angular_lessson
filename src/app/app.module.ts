import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { SideBarComponent } from './bai-tap-layout/side-bar/side-bar.component';
import { HeaderComponent } from './bai-tap-layout/header/header.component';
import { FooterComponent } from './bai-tap-layout/footer/footer.component';
import { ContentComponent } from './bai-tap-layout/content/content.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';
import {DirectivesModule} from './Modules/directives/directives.module'
import { Baitap6Module } from './Modules/baitap6/baitap6.module';
import { InteractionModule } from './Modules/interaction/interaction.module';
import { DOMAngularModule } from './Modules/domangular/domangular.module';

@NgModule({
  declarations: [// những thẻ có thể sử dụng cho module này 
    AppComponent,
    DemoComponent,
    
    
  ],
  imports: [ // các module khác muốn sử dụng được trong module này thì f import
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectivesModule,
    Baitap6Module,
    InteractionModule,
    DOMAngularModule,
  ],
  providers: [], // nơi chứa các service muốn sử dụng được cho module này khai báo tại đây
  bootstrap: [AppComponent] // các component sử dụng được trong file index.html
})
export class AppModule { }
