import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';
import { ReturningUser } from '../models/returning-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  newUserData: NewUser;
  returningUserData: ReturningUser;
  url: string = 'http://localhost:3000';

  constructor(private myhttp: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  // httpHeaderToken = {
  //   headers: new HttpHeaders({
      
  //   }),
  // };

  getHeaderWithToken(){
    let httpHeaderToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':  localStorage.getItem("UserToken"),
      }),
    };
    return httpHeaderToken
  }

  createUser(newUser: NewUser): Observable<NewUser> {
    let header = this.getHeaderWithToken();
    return this.myhttp.post<NewUser>(
      this.url + '/auth/create',
      newUser,
      header
    );
  }
  // createUser(newUser: NewUser):void {
  //   console.log(newUser);
  //   console.log(newUser.name);
  //   console.log(newUser.email);
  //   console.log(newUser.username);
  //   console.log(newUser.password);
  // }

  loginUser(user: ReturningUser): Observable<any> {
    return this.myhttp.post<ReturningUser>(
      this.url + '/auth/login',
      user,
      this.httpHeader
    );
  }

  refreshUser(): Observable<any> {
    let header = this.getHeaderWithToken();
    return this.myhttp.get<any>(
      this.url + '/auth/refresh',
      header
    );
  }

  logoutUser(): Observable<any> {
    let header = this.getHeaderWithToken();
    return this.myhttp.get<any>(
      this.url + '/auth/logout',
      header
    );
  }

  // loginUser(user: ReturningUser):void {
  //   console.log(user.username);
  //   console.log(user.password);
  // }
}
