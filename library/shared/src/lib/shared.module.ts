import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { I18N_PROVIDERS } from './services';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [I18NextModule.forRoot()],
  providers: [I18N_PROVIDERS],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedComponent,
  ],
})
export class SharedModule {}

