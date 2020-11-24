import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation/reservation';
//import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {

  reservations: Reservation[] | undefined;
  user: any = {};

  //token: string;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.getReservation();
  }

  goToPage(pageName: string):void {
    this.router.navigate([pageName]);
  }

  getReservation() {
    this.http.get<any>(`https://683cbd401a84.ngrok.io/reservation/${(this.user.id as any)}`,{
      headers: new HttpHeaders()
          .set('Authorization', `bearer`)
    }).subscribe(data => {
      this.reservations = data;
    });
  }

  deleteReservation(reservation_id: any) {
    console.log(reservation_id);
    
    this.http.delete<any>(`https://683cbd401a84.ngrok.io/reservation/${(reservation_id as any)}`)
    .subscribe(data => {
      this.getReservation();
    });
  }
}
