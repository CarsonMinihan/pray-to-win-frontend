import { Component, OnInit } from '@angular/core';
import { Mood } from 'src/app/shared/models/mood.model';
import { MoodService } from 'src/app/shared/services/mood.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-daily-mood-changes',
  templateUrl: './daily-mood-changes.component.html',
  styleUrls: ['./daily-mood-changes.component.scss']
})
export class DailyMoodChangesComponent implements OnInit {
  moodFormData: Mood = new Mood;
  changes: boolean = false;
  makeChanges: string = '7';
  mood: string = '1';

  constructor(public nav: UiService, public moodService: MoodService) { }

  ngOnInit(): void {
    this.nav.show();
  }
  

  handleMoodForm() {
    this.moodFormData.mood = Number(this.mood);
    this.moodFormData.changes = this.changes;
    let date = new Date();
    this.moodFormData.date = date.getTime();
    console.log(this.moodFormData.date);

    

    if(this.moodFormData.changes){
      //if they add a change

      this.moodFormData.makeChanges = Number(this.makeChanges);

      // this.moodService.createMood(this.moodFormData).subscribe((res) => {
      //   console.log(res);
      // });
    }
    else if (!this.moodFormData.changes){
      //if they don't add a change

      this.moodFormData.details = "";
      this.moodFormData.makeChanges = 7;

      // this.moodService.createMood(this.moodFormData).subscribe((res) => {
      //   console.log(res);
      // });
    }
    else {
      console.log('error')
    }
    console.log(this.moodFormData)
    
  }
}
