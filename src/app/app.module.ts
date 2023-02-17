import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuToolbarComponent } from './home/menu-toolbar/menu-toolbar.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoPageComponent } from './home/demo-page/demo-page.component';

import { APP_CONFIG_PROVIDER } from './admin';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    DemoPageComponent,
    MenuToolbarComponent,
  ],
  providers: [APP_CONFIG_PROVIDER],
  bootstrap: [],
})
export class AppModule {}
