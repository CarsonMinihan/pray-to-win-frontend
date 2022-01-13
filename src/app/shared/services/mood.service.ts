import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood, MoodArray, MoodObjectFRBK, UpdateMood } from '../models/mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  url: string = 'http://localhost:3000';
  moodObjectFRBK: MoodObjectFRBK;

  constructor(private myhttp: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token':  localStorage.getItem("UserToken"),
    }),
  };

  createMood(newMood: Mood): Observable<MoodObjectFRBK> {
    return this.myhttp.post<MoodObjectFRBK>(
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

  getMoods(): Observable<MoodArray> {
    return this.myhttp.get<MoodArray>(
      this.url + '/mood/read',
      this.httpHeader
    )
  }

  getMoodsBetween(date1: Number, date2: Number): Observable<MoodArray> {
    return this.myhttp.post<MoodArray>(
      this.url + '/mood/rbd',
      { date1, date2 },
      this.httpHeader
    )
  }

  updateMood(updateMood: UpdateMood): Observable<MoodObjectFRBK> {
    return this.myhttp.put<MoodObjectFRBK>(
      this.url + '/mood/update',
      updateMood,
      this.httpHeader
    );
  }

  deleteMood(id): Observable<MoodObjectFRBK> {
    return this.myhttp.post<MoodObjectFRBK>(
      this.url + '/mood/delete',
      { id },
      this.httpHeader
    );
  }

  placeholderForNumberOfChanges(date: Number): Observable<MoodArray> {
    return this.myhttp.post<MoodArray>(
      this.url + '/mood/placeholder',
      { date },
      this.httpHeader
    )
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
