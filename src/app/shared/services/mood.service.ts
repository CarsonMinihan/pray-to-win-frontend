import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood } from '../models/mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  url: string = 'http://localhost:3000';

  constructor(private myhttp: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token':  localStorage.getItem("UserToken"),
    }),
  };

  createMood(newMood: Mood): Observable<any> {
    return this.myhttp.post<Mood>(
      this.url + '/mood/create',
      newMood,
      this.httpHeader
    );
  }
  // createMood(newMood: Mood): void {
  //   console.log(
  //     this.httpHeader, newMood
  //   );
  // }

  getMoods(): Observable<Mood[]> {
    return this.myhttp.get<Mood[]>(
      this.url + '/mood/read',
      this.httpHeader
    )
  }

  updateMood() {
    //update Mood route
  }

  deleteMood() {
    //delete Mood route
  }

}
