import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './../../models/classroom/classroom'
import { UserService } from './../../services/user/user.service'

declare function ready(): any; 

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {
  classrooms: Classroom[] | undefined;

  constructor(
    public userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.classrooms = this.userService.getClassrooms();
    // console.log("HOLAAAAA");
    // console.log(this.classrooms);
    // console.log(typeof(this.classrooms));

    this.userService.getClassrooms().subscribe((data) => {
        this.classrooms = data;
        console.log(data);
    })
    console.log("AAAAAA");
    ready();
  }

  send() {
    /*
    this.http.post('https://b697e71a90b9.ngrok.io/transaction/transfer',{
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
    */
  }

}
