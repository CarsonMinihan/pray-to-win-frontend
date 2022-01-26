import { Component, OnInit } from '@angular/core';
import { MoodService } from 'src/app/shared/services/mood.service';
import { UiService } from 'src/app/shared/services/ui.service';


@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.component.html',
  styleUrls: ['./change-list.component.scss']
})
export class ChangeListComponent implements OnInit {
  numOfDiet: number = 0;
  numOfRoutine: number = 0;
  numOfExercise: number = 0;
  numOfSleep: number = 0;
  numOfHygiene: number = 0;
  numOfSocial: number = 0;
  numOfOther: number = 0;
  numOfDays: number = 0;

  eventsLoaded: Promise<boolean>;


  constructor(public ui: UiService, public moodService: MoodService) { }

  ngOnInit(): void {
    var date = new Date().getTime();
    this.moodService.numberOfChanges(date).subscribe(res => {
      this.numOfDiet = res.data.numOfDiet;
      this.numOfRoutine = res.data.numOfRoutine;
      this.numOfExercise = res.data.numOfExercise;
      this.numOfSleep = res.data.numOfSleep;
      this.numOfHygiene = res.data.numOfHygiene;
      this.numOfSocial = res.data.numOfSocial;
      this.numOfOther = res.data.numOfOther;
      this.numOfDays = res.data.numOfDays;
      
    },
    (res) => {
      console.log(res.error);
      if (!res.error.success && res.error.message) {
        let message = 'Error: ' + res.error.message;
        this.ui.showToastMessage(message, 'danger');
      } else {
        this.ui.showToastMessage('Error: failed to load', 'danger');
      }
    });
    this.eventsLoaded = Promise.resolve(true);
  }

}
