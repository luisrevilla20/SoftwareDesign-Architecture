import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { UserRoutingModule } from './user-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { SendFormComponent } from './components/send-form/send-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SendComponent } from './pages/send/send.component';


@NgModule({
  declarations: [NavComponent, InfoTableComponent, SendFormComponent,
                 HomeComponent,
                 SendComponent,],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class UserModule {

}
