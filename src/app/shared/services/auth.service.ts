import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private token!: string;

  login() {
    this.token = 'MyFakeToken';
  }

  getToken(): string {
    return this.token;
  }
}
