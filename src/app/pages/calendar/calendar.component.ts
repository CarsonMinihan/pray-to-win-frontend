import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { GroupedObservable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { UiService } from 'src/app/shared/services/ui.service';
import { MoodService } from 'src/app/shared/services/mood.service';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';
import { Router } from '@angular/router';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  orange: {
    primary: '#FFA500',
    secondary: '#FFA500',
  },
  black: {
    primary: '#000000',
    secondary: '#000000',
  },
  customColor: {
    primary: '#ff1188',
    secondary: '#9ffeff',
  },
};
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    details: string;
    id: string;
  };

  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fas fa-fw fa-pencil-alt"></i>',
  //     a11yLabel: 'Edit',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     },
  //   },
  //   {
  //     label: '<i class="fas fa-fw fa-trash-alt"></i>',
  //     a11yLabel: 'Delete',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter((iEvent) => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     },
  //   },
  // ];

  refresh: Subject<any> = new Subject();



  

        //Calendar events is an array!!!




  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
    // {
    //   start: startOfDay(new Date("2021-11-24T08:00:00.000Z")),
    //   title: 'An event with no end date and you can edit the time',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true,
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: addHours(new Date(), 2),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
    // {
    //   start: new Date("2021-11-22"),
    //   title: 'An event that I added in the code and changed color',
    //   color: colors.customColor,
    //   actions: this.actions,
    // },
    // {
    //   start: new Date("2021-11-26"),
    //   title: 'Test Event',
    //   color: { primary: '#d0abb3', secondary: '#fff111' },
    // },
    // {
    //   start: new Date("2021-12-1"),
    //   title: 'Mario',
    //   color: { primary: '#fffbb3', secondary: '#fff111' },
    // },
    // {
    //   start: new Date("2021-12-8"),
    //   title: 'potato',
    //   color: { primary: '#d0afff', secondary: '#fff111' },
    // },
    // {
    //   start: new Date('2021-11-25'),
    //   title: 'Test Event 2',
    //   color: { primary: '#d0afff', secondary: '#fff111' },
    // },
  ];

  activeDayIsOpen: boolean = false;
  eventsLoaded: Promise<boolean>;


  constructor(private modal: NgbModal, public ui: UiService, public moodService: MoodService, private router: Router) {}

  ngOnInit(): void {
    this.ui.show();
    this.moodService.getMoods().subscribe((res) => {
      let data = res.data;
      
      for (let i = 0; i < data.length; i++) {
        
        let moodItem = {
          start: new Date(data[i].date),
          title: "",
          color: colors.customColor,
          id: data[i]._id
        }

        switch (data[i].mood) {
          case -1: 
            moodItem.title = "Bad mood";
            moodItem.color = colors.red;
            break;
          
          case 0: 
            moodItem.title = "Neutral mood";
            moodItem.color = colors.yellow;
            break;
          
          case 1: 
            moodItem.title = "Good mood";
            moodItem.color = colors.blue;
            break;
          
          default: 
            moodItem.title = "Error";
            moodItem.color = colors.black;
            break;
        }

        console.log(moodItem);
        this.events.push(moodItem);

        if (data[i].changes){
          let changeItem = {
            start: new Date(data[i].date),
            id: data[i]._id,
            // title: "This" + " Change",
            title: this.moodService.getChangeType(data[i].makeChanges) + " Change",
            color: colors.orange,
            details: data[i].details,
          }
          this.events.push(changeItem);
        }
      }
      this.eventsLoaded = Promise.resolve(true);
    });;
  }



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(events);
    this.activeDayIsOpen = false;
    if (events.length >= 1) {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    } else {
      this.activeDayIsOpen = false;
      this.viewDate = date;
    }
  }

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd,
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map((iEvent) => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd,
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }

  handleEvent(event: any): void {
    let details = event.details;
    let action = event.title;
    let id = event.id;
    this.modalData = { details, action, id };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  delete() {
    console.log(this.modalData.id);
    this.moodService.deleteMood(this.modalData.id).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.events = this.events.filter((modalData) => modalData.id !== res.data._id);
        this.modal.dismissAll();
        this.ui.showToastMessage('Mood Successfully Deleted', "primary");
      }
      else {
        this.ui.showToastMessage(res.message, "danger");
      }
      
    });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}