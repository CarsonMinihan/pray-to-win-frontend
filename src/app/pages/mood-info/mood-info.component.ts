import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

}
