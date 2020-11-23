import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LogService} from './../../services/log/log.services';
import { User } from '../../../user/models/user/user';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public email: string | undefined;
  public password: string | undefined;

  constructor(
    public logService:LogService,
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
  }

  user: User = {};

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }


  login() {
    this.http.post('https://683cbd401a84.ngrok.io/user/login',{email: this.email,
    password: this.password}, {
      headers: new HttpHeaders()
          .set('Authorization', `bearer`)
    }).subscribe(data => {
      this.user = data;
      localStorage.setItem('user',JSON.stringify(data));
      this.goToPage('/User/Home');
    });
  }

}
