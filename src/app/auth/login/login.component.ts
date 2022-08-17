import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interfaces/credential';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
     private authService: AuthService,
     private tokenService:TokenService
  ) { }

  form: ICredential = {
    login: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form)
    this.authService.login(this.form).subscribe(
       data => {
        this.tokenService.saveToken(data.token)
   },
    //   err => console.log(err)
    )
  }
}
