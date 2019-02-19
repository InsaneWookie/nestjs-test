import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  inviteCode: string = '';

  registerModel = {
    username: '',
    email: '',
    password: '',
    repeat_password: '',
    invite_code: ''

  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,) { }

  ngOnInit() {
    this.registerModel.invite_code = this.route.snapshot.paramMap.get('inviteCode');
  }

  onSubmit() {
    console.log(this.registerModel);
    this.http.post('/api/v1/auth/register', this.registerModel).subscribe((res :any) => {
      console.log(res);

      localStorage.setItem('id_token', res.accessToken);

      this.router.navigate(['/']);
    });
  }

}
