import { Component, OnInit } from '@angular/core';
import { MoodService } from 'src/app/shared/services/mood.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-mood-info',
  templateUrl: './mood-info.component.html',
  styleUrls: ['./mood-info.component.scss']
})
export class MoodInfoComponent implements OnInit {
  good: boolean = false;
  neutral: boolean = false;
  bad: boolean = false;
  mood: string = "LOADING";

  constructor(public moodService: MoodService, public ui: UiService) { }

  ngOnInit(): void {
    this.moodService.avgMoodWeek().subscribe((res) => {
      if(res.success){
        if(res.data > 0.5){
          this.good = true;
          this.mood = "good"
        }
        if(res.data <= 0.5 && res.data >= -0.5){
          this.neutral = true;
          this.mood = "neutral"
        }
        if(res.data < -0.5){
          this.bad = true;
          this.mood = "bad"
        }
      }
    },
    (res) => {
      console.log(res.error);
      if (!res.error.success && res.error.message) {
        let message = 'Error: ' + res.error.message;
        this.ui.showToastMessage(message, 'danger');
      } else {
        this.ui.showToastMessage('Error: failed to load', 'danger');
      }
    })
  }

}
