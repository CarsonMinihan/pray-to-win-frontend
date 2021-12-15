import { Component, OnInit } from '@angular/core';
import { Mood } from 'src/app/shared/models/mood.model';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-daily-mood-changes',
  templateUrl: './daily-mood-changes.component.html',
  styleUrls: ['./daily-mood-changes.component.scss']
})
export class DailyMoodChangesComponent implements OnInit {
  moodFormData: Mood = new Mood (0, '1', false, '', '');

  constructor(public nav: UiService) { }

  ngOnInit(): void {
    this.nav.show();
  }

  handleMoodForm() {
    if(this.moodFormData.changes){
      console.log(Number(this.moodFormData.makeChanges));
    }
    else if (!this.moodFormData.changes){
      console.log('works');
    }
    else {
      console.log('error')
    }
    console.log(Number(this.moodFormData.mood));
    console.log(this.moodFormData.changes);
    
  }
}
