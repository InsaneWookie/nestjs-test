import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: { username: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.login = {username: '', password: ''};
  }

  onSubmit() {
    this.http.post('/api/v1/auth/login', this.login).subscribe((res: any) => {

      if(res.registrationRequired){
        this.router.navigate([`/register/${res.inviteCode}`]);
      } else {

        const expiresAt = moment().add(res.expiresIn, 'second');

        localStorage.setItem('id_token', res.accessToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('user_id', res.userId);

        window.location.href = '/';
      }
    });
  }

}
