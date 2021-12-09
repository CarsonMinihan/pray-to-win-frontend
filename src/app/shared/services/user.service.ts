import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';
import { ReturningUser } from '../models/returning-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUserData: NewUser;
  returningUserData: ReturningUser;
  url:string = "";

  constructor(private myhttp: HttpClient) { }

  // createUser(newUser: NewUser):Observable<NewUser> {
  //   return this.myhttp.post<NewUser>(this.url, newUser);
  // }
  createUser(newUser: NewUser):void {
    // return this.myhttp.post<NewUser>(this.url, newUser);
    console.log(newUser);
    console.log(newUser.name);
    console.log(newUser.email);
    console.log(newUser.username);
    console.log(newUser.password);
  }

  // loginUser(user: ReturningUser):Observable<ReturningUser> {
  //   return this.myhttp.post<ReturningUser>(this.url, user);
  //   console.log(user.username);
  //   console.log(user.password);
  // }

  loginUser(user: ReturningUser):void {
    // return this.myhttp.post<ReturningUser>(this.url, user);
    console.log(user.username);
    console.log(user.password);
  }



}
