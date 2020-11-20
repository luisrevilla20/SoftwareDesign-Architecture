import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  user: User;
  token: string;
  balance: number;

  constructor(
    public userService:UserService,
    public auth: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenAuth');
    this.user = this.auth.user;
    this.getBalance();
  }

  getBalance() {
    this.http.get<any>(`https://b697e71a90b9.ngrok.io/user/balance/${(this.user as any).user.id}`,{
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${this.token}`)
    }).subscribe(data => {
      this.balance = data.balance;
    });
  }
}
