import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutes } from './app.route';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { MainModule } from 'libs/main/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import { FormValidationModule } from 'libs/form-validation/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MainModule,
    FormValidationModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    PanelModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
