import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-with-form',
  templateUrl: './with-form.component.html',
  styleUrls: ['./with-form.component.scss']
})
export class WithFormComponent implements OnInit {
  amount: number;
  token: string;

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenAuth');
  }

  send() {
    this.http.post('https://a37135c55a90.ngrok.io/transaction/withdrawal',{
      user_id: this.auth.user.user.id,
      amount: this.amount
    }, {
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${this.token}`)
    }).subscribe(data => {
      console.log(data);
      alert("Se retiro el dinero.");
    });
  }

}
