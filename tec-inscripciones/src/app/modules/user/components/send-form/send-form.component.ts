import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './../../models/classroom/classroom'
import { UserService } from './../../services/user/user.service'
import { User } from '../../models/user/user';

declare function selectValueChange(): any; 

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {
  classrooms: Classroom[] | undefined;
  user: any = {};
  classroom_id: string | undefined;
  date: string | undefined;
  start_time: string | undefined;
  end_time: string | undefined;
  description: string | undefined;

  constructor(
    public userService: UserService,
    private http: HttpClient,
    //private start_time: any,
    //private end_time: any,
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.userService.getClassrooms().subscribe((data) => {
        this.classrooms = data;
    })
    selectValueChange();
    
  }

  send() {
    var start_date = this.date?.concat(" " + this.start_time?.toString() as string);
    var end_date = this.date?.concat(" " + this.end_time?.toString() as string);

    this.http.post('https://683cbd401a84.ngrok.io/reservation',{
      user_id: this.user.id,
      classroom_id: this.classroom_id,
      start_date: start_date,
      end_date: end_date,
      description: this.description
    }, {
      headers: new HttpHeaders()
          .set('Authorization', `bearer`)
    }).subscribe(data => {
      alert("Se apartó la fecha.");
    });

  }
}
