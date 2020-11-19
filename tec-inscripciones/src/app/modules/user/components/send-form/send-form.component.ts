import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {
  amount: number;
  origin: string;
  token: string;

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenAuth');
  }

  send() {
    this.http.post('https://a37135c55a90.ngrok.io/transaction/transfer',{
      user_id: this.auth.user.user.id,
      destination_email: this.origin,
      amount: this.amount
    }, {
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${this.token}`)
    }).subscribe(data => {
      console.log(data);
      alert("Se envio el dinero.");
    });
  }

}
