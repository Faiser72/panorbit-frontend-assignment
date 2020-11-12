import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
