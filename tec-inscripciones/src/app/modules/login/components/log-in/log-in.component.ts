import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LogService} from './../../services/log/log.services';
import { User } from '../../../user/models/user/user';


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
    private router: Router,) { }

  ngOnInit(): void {
  }

  user: User = {};

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }

  login(){
    // this.logService.login({email: this.email,
    // password: this.password})

    // this.logService.login().subscribe((user) => {
    //   console.log(user);
    // })

    this.logService.login({email: this.email, password: this.password}, {})
      //this.goToPage('/User/Home');

    // this.logService.login().subscribe(user => {
      // this.user.session = user.token;
      // this.logService.login({
      //   email: this.email,
      //   password: this.password
      // }, this.user).subscribe(data => {
      //   this.auth.user = data;
      //   localStorage.setItem('tokenAuth', user.token);
      //   localStorage.setItem('user',JSON.stringify(data));
      //   this.goToPage('/User/Home');
      // });
    // });

    // let a = this.logService.prueba(data =>
    //   );
    // this.logService.prueba().subscribe((data) => {
    //   console.log(data);
    // })
    // console.log("Perrrroooooooo");
    //this.goToPage('/User/Home');
  }
  /*
  login(){
    this.logService.createToken().subscribe(user => {
      this.user.session = user.token;
      this.logService.login({
        email: this.mail,
        password: this.pass
      }, this.user).subscribe(data => {
        this.auth.user = data;
        localStorage.setItem('tokenAuth', user.token);
        localStorage.setItem('user',JSON.stringify(data));
        this.goToPage('/User/Home');
        });
    });
  }
  */
}
