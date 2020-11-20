import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component';
import { FootComponent } from './main_components/foot/foot.component';

import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
