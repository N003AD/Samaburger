import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/client/catalogue');
  }
  // loginUser(signInform: NgForm){
  //   console.log(signInform);
  //   console.log(signInform.value.emailAddressField);
  //   console.log(signInform.value.passwordField);
  //   console.log(signInform.value.termsField);

  // }


}
