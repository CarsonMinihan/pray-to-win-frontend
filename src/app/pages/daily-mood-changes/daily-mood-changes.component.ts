import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public ui: UiService, public moodService: MoodService, private router: Router) {
    this.moodFormData.changes = false;
    this.moodFormData.makeChanges = 7;
    this.moodFormData.mood = 0;
   }

  ngOnInit(): void {
    this.ui.show();
  }
  
  

  handleMoodForm() {
    let date = new Date();
    this.moodFormData.date = date.getTime();

    

    if(this.moodFormData.changes){
      //if they add a change

      this.moodService.createMood(this.moodFormData).subscribe((res) => {
        console.log(res);
        this.ui.showToastMessage('successfully created');
        this.router.navigate(['/calendar']);
      });
    }
    else if (!this.moodFormData.changes){
      //if they don't add a change

      this.moodFormData.details = "";
      this.moodFormData.makeChanges = 7;

      this.moodService.createMood(this.moodFormData).subscribe((res) => {
        console.log(res);
        this.ui.showToastMessage('successfully created');
        this.router.navigate(['/calendar']);
      });
    }
    else {
      console.log('error')
    }
    console.log(this.moodFormData)
    
  }
}
