import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutSidenavWidgetComponent } from './features/layout-sidenav-widget/layout-sidenav-widget.component';
import { LayoutTopbarWidgetComponent } from './features/layout-topbar-widget/layout-topbar-widget.component';
import { LayoutFooterWidgetComponent } from './features/layout-footer-widget/layout-footer-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContentComponent,
    LayoutSidenavWidgetComponent,
    LayoutTopbarWidgetComponent,
    LayoutFooterWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
