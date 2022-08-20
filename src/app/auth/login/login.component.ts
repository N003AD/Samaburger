import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interfaces/credential';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { NgToastService } from 'ng-angular-popup' ;
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private authService: AuthService,
     private tokenService:TokenService,
     private toast: NgToastService,
     private router: Router
  ) { }

  form: ICredential = {
    login: '',
    password: ''
  };

  ngOnInit(): void {
  }


  onSubmit(): void{
    console.log(this.form);
    this.authService.login(this.form).subscribe(
      data => {

        const tokenInfo = this.getDecodedAccessToken(data.token);
        if (tokenInfo.roles[0]=="ROLE_CLIENT") {
          this.router.navigate(['/client/commande-client']);

        }
       else if (tokenInfo.roles[0]=="ROLE_GESTIONNAIRE") {
          this.router.navigate(['/admin/commande']);

        }
        // decode token
        const expireDate = tokenInfo.exp; // get token expiration dateTime
        console.log(tokenInfo); // show decoded token object in console
        this.toast.success({detail:"Success Message", summary:"Login Success", duration:5000})
        this.tokenService.saveToken(data.token);
      },
      //   err => console.log(err)
            err=>{
      this.toast.error({detail:"Error Message", summary:"Login Failed, Try again later !!", duration:5000})

            }
      );
    }
    getDecodedAccessToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch(Error) {
        return null;
      }
    }
}
