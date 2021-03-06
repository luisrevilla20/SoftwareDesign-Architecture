import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { Router} from '@angular/router';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: any = {};

  constructor(
    public userService:UserService,
    private router: Router,
    //public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
  }

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }

}
