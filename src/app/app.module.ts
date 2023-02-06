import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuToolbarComponent } from './home/menu-toolbar/menu-toolbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18N_PROVIDERS, SharedModule } from './shared';
import { DemoPageComponent } from './home/demo-page/demo-page.component';

import { I18NextModule } from 'angular-i18next';
import { APP_CONFIG_PROVIDER } from './admin';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    I18NextModule.forRoot(),
    NgbModule,
    DemoPageComponent,
    MenuToolbarComponent,
  ],
  providers: [I18N_PROVIDERS, APP_CONFIG_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
