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

  getMoods(): Observable<any> {
    return this.myhttp.get<any>(
      this.url + '/mood/read',
      this.httpHeader
    )
  }

  updateMood() {
    //update Mood route
  }

  deleteMood(id): Observable<any> {
    return this.myhttp.post<string>(
      this.url + '/mood/delete',
      id,
      this.httpHeader
    );
  }
  getChangeType(x){
    switch (x) {
      case 1:
        return "Diet";
        break;

      case 2: 
        return "Routine";
        break;

      case 3:
        return "Exercise";
        break;

      case 4:
        return "Sleep";
        break;

      case 5:
        return "Hygiene";
        break;

      case 6:
        return "Social";
        break;

      case 7:
        return "Other";
        break;

      default:
        return "error";
        break;
    }
  }

}
