import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationStart } from '@angular/router';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader: boolean = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public nav: NavbarService
  ) {
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/login' || event['url'] == '/') {
    //       this.showHeader = false;
    //     } else {
    //       this.showHeader = true;
    //     }
    //   }
    // });
  }
  OnInit(): void {}

  title = 'BSTFinal';

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date('2021-11-25');
  freddyComponentValue: boolean = true;

  activeEvent: any = {};

  events = [
    {
      start: this.viewDate,
      title: 'Test Event',
      eventType: 1,
      color: { primary: '#d0abb3', secondary: '#fff111' },
    },
    {
      start: this.viewDate,
      title: 'Mario',
      color: { primary: '#fffbb3', secondary: '#fff111' },
    },
    {
      start: this.viewDate,
      title: 'potato',
      color: { primary: '#d0afff', secondary: '#fff111' },
    },
    {
      start: new Date('2021-11-25'),
      title: 'Test Event',
      color: { primary: '#d0afff', secondary: '#fff111' },
    },
  ];

  ngOnInit(): void {
    console.log('Init Loaded');
  }

  toggleNav() {
    this.nav.toggle();
  }

  // Calendar Events
  dayClicked(event: any): void {
    console.log(event);

    console.log(event.events.length + ' IS THE NUMBER OF EVENTS');

    if (event.events.length >= 1) {
      this.freddyComponentValue = true;
      this.viewDate = event.date;
    } else {
      this.freddyComponentValue = false;
      this.viewDate = event.date;
    }
  }

  eventClicked(event: any, content: any): void {
    console.log('EVENT CLICKED');
    console.log(event);
    this.activeEvent = event;
    this.modalService.open(content, { ariaLabelledBy: 'modal-event' });
  }

  closeDayView(content: any) {
    this.freddyComponentValue = false;
    this.modalService.open(content, { ariaLabelledBy: 'test-modal' });
  }
}
