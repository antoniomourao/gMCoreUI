import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuToolbarComponent } from './home/menu-toolbar/menu-toolbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared';
import { DemoPageComponent } from './home/demo-page/demo-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    DemoPageComponent,
    MenuToolbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
