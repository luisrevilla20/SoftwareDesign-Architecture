import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './../../models/classroom/classroom'
import { UserService } from './../../services/user/user.service'

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userService.getClassrooms().subscribe((data) => {
        this.classrooms = data;
    })
    selectValueChange();
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
  }

  send() {

    console.log("usuer", this.user.id);
    console.log("classroom", this.classroom_id);
    
    
    this.http.post('https://683cbd401a84.ngrok.io/reservation',{
      user_id: this.user.id,
      classroom_id: this.classroom_id,
      // date: this.date,
      start_time: this.start_time,
      end_time: this.end_time,
      description: this.description
    }, {
      headers: new HttpHeaders()
          .set('Authorization', `bearer`)
    }).subscribe(data => {
      console.log(data);
      alert("Se apartó la fecha.");
    });

  }
}
