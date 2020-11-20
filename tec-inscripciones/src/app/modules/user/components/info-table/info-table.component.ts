import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transactions/transaction';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  transactions: Transaction[];
  token: string;
  constructor(
    public auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenAuth');
    this.getTransaction();
  }

  getTransaction() {
    this.http.get<any>(`https://b697e71a90b9.ngrok.io/user/transactions/${(this.auth.user as any).user.id}`,{
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${this.token}`)
    }).subscribe(data => {
      this.transactions = data;
    });
  }
}
