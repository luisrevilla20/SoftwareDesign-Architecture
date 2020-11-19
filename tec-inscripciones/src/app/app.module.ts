import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component';
import { FootComponent } from './main_components/foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
