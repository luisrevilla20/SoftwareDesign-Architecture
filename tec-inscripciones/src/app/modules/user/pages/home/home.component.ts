import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    //private auth: AuthService
  ) { }

  ngOnInit(): void {
    /*
    const user = JSON.parse(localStorage.getItem('user'));
    this.auth.user = user;
    */
  }

}
