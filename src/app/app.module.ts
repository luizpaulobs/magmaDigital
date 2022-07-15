import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { HeaderComponent } from './componentes/layout/header/header.component';
// import {
//   RiAncientGateFill,
//   RiHome2Fill,
//   RiAlignJustify,
//   RemixIconModule,
//   RiNotification2Line,
//   RiUserLine,
//   RiLightbulbLine,
//   RiBriefcaseLine,
//   RiFileTextLine,
//   RiArchiveDrawerLine,
//   RiHandCoinLine
// } from 'angular-remix-icon';
import { SidebarComponent } from './componentes/layout/sidebar/sidebar.component';

// const icons = {
//   RiAncientGateFill,
//   RiHome2Fill,
//   RiAlignJustify,
//   RiUserLine,
//   RiNotification2Line,
//   RiLightbulbLine,
//   RiBriefcaseLine,
//   RiFileTextLine,
//   RiArchiveDrawerLine,
//   RiHandCoinLine
// };

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RemixIconModule.configure(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
