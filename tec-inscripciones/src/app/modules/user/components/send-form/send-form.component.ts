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
    console.log("AAAAAAA", typeof(this.user));
    console.log("BBBBB", this.user);
    console.log("user", this.user.id);
    console.log("classroom", this.classroom_id);
    console.log("start time", this.start_time);
    console.log("end time", this.end_time);
    console.log("descriotion", this.description);
    
    var start_date = this.date?.concat(" " + this.start_time?.toString() as string);
    var end_date = this.date?.concat(" " + this.end_time?.toString() as string);

    console.log("Star", start_date);
    console.log("Stop", end_date);
    
    this.http.post('https://683cbd401a84.ngrok.io/reservation',{
      user_id: this.user.id,
      classroom_id: this.classroom_id,
      // date: this.date,
      start_date: start_date,
      end_date: end_date,
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
