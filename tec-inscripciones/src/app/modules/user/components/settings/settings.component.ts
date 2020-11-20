import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: User;

  username = new FormGroup({
    user_name: new FormControl('', Validators.required)
  });
  email = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  password = new FormGroup({
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  });
  token: string;

  constructor(
    public userService:UserService,
    public auth: AuthService,
    private http: HttpClient
  ) { }

	ngOnInit(): void {
    this.token = localStorage.getItem('tokenAuth');
    this.user = this.auth.user.user;
	}

  changeUsername() {
    this.updateUser(this.username.value);
  }

  changeMail() {
    this.updateUser(this.email.value);
  }

  changePass() {
    this.updateUser(this.password.value);
  }

  updateUser(body) {
    this.http.patch<any>(`https://b697e71a90b9.ngrok.io/user/${(this.auth.user.user as any).id}`, body,{
      headers: new HttpHeaders()
          .set('Authorization', `bearer ${this.token}`)
    }).subscribe(data => {
      this.user = data;
      this.auth.user.user = data;
      localStorage.setItem('user', JSON.stringify(this.auth.user));
      alert('Se actualizo el perfil.');
    });
  }
}
