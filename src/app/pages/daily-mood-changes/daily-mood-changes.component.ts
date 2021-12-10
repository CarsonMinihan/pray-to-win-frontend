import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-daily-mood-changes',
  templateUrl: './daily-mood-changes.component.html',
  styleUrls: ['./daily-mood-changes.component.scss']
})
export class DailyMoodChangesComponent implements OnInit {

  constructor(public nav: UiService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
