import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { HttpClientModule} from '@angular/common/http'
import { LogService } from './services/log/log.services';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LogService,
  ]
})
export class LoginModule { }
