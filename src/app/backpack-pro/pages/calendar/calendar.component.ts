import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, addWeeks, addMonths, subWeeks, subMonths, startOfWeek, startOfMonth, endOfWeek } from 'date-fns';
import { CalendarEvent, CalendarView, CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { CustomDateFormatter } from './days-format';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';



const moment =  _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'dddd, MMMM d',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

type CalendarPeriod = 'day' | 'week' | 'month';

function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: addDays,
    week: addWeeks,
    month: addMonths
  }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: subDays,
    week: subWeeks,
    month: subMonths
  }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth
  }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth
  }[period](date);
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},


  ]
})
export class CalendarComponent implements OnInit {

  @Input()checked: Boolean

  dat           = new FormControl(moment());
  clickedDate   : Date;
  clickedColumn : number;
  check         : number = 0;

  view          : CalendarPeriod = 'month';

  CalendarView  = CalendarView;
  viewDate      : Date = new Date();


  events: Array<CalendarEvent<{ number: number, total: number }>> = [
    
    {
      start: new Date('3-21-2019'),
      title: null,
      meta :{
        number: 6,
        total: 25,
      },
    },

    {
      start: startOfDay('3-22-2019'),
      title: null,
      meta :{
        number: 3,
        total: 25,
      },
    },

    {
      start: startOfDay('3-23-2019'),
      title: null,
      meta :{
        number: 3,
        total: 25,
      },
    },
    
  ];




  constructor() { this.dateOrViewChanged(); }

  date = new Date();

  minDate: Date = new Date();

  maxDate: Date = new Date();

  prevBtnDisabled: boolean = false;

  nextBtnDisabled: boolean = false;

  increment(): void {
    this.changeDate(addPeriod(this.view, this.viewDate, 12));
  }

  decrement(): void {
    this.changeDate(subPeriod(this.view, this.viewDate, 12));
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarPeriod): void {
    this.view = view;
    this.dateOrViewChanged();
  }
  today(): void {
    this.changeDate(new Date());
  }

  dateIsValid(date: Date): boolean {
    return date >= this.minDate;
  }

  dateOrViewChanged(): void {
    this.prevBtnDisabled = !this.dateIsValid(
      endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
    );
    this.nextBtnDisabled = !this.dateIsValid(
      startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
    );
    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (!this.dateIsValid(day.date)) {
        day.cssClass = 'cal-disabled';
      }
    });
  }

  stringInside(haystack, needle)
  {
    return haystack == needle;
  }

  log(item){ console.log(item) }

  datas = null;


  addEvent(type: string, data) {
    this.datas = new Date(data);
    console.log(data)
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date(data)),
        meta :{
          number: 3,
          total: 25,
        },
      }
    ];
  }

  place () {
    if(this.datas == null){
      return 'No Date Selected';
    }else{
      return 'Selected Date';
    }
  }

  avail = null;

  available (e) {
    if(e == true){
       var availabl = '1';
       return false
    }
  }

  ngOnInit() {
  }

}



import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, addWeeks, addMonths, subWeeks, subMonths, startOfWeek, startOfMonth, endOfWeek } from 'date-fns';
import { CalendarEvent, CalendarView, CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { CustomDateFormatter } from './days-format';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { DayViewHour } from 'calendar-utils';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';





interface bookings {
  start: string;
  activity_End: string;
  isForGroup: number;
  total_tickets: number;
  availability_group_Price : number;
  totalCapacity: number;
  title:string;
}

interface Film {
  id: number;
  title: string;
  release_date: string;
}

export interface DialogData {
  animal: string;
  name: string;
}




const moment =  _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'ddd,  MMMM D',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

type CalendarPeriod = 'day' | 'week' | 'month';

function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: addDays,
    week: addWeeks,
    month: addMonths
  }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: subDays,
    week: subWeeks,
    month: subMonths
  }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth
  }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth
  }[period](date);
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},


  ]
})
export class CalendarComponent implements OnInit {

  @Input()checked: Boolean

  dat           = new FormControl(moment());
  clickedDate   : Date;
  clickedColumn : number;
  check         : number = 0;
  authService = null;

  view          : CalendarPeriod = 'month';

  CalendarView  = CalendarView;
  viewDate      : Date = new Date();

  animal: string;
  name: string;


  events: Array<CalendarEvent<{ number: number, total: number }>> = [];

  // events$: Observable<Array<CalendarEvent<{ book: bookings }>>>;
  // events$: Observable<Array<CalendarEvent<{ film: Film }>>>;


// events$: Observable<CalendarEvent[]>;


  constructor(private http: HttpClient, auth: AuthService, public dialog: MatDialog) { 
    this.dateOrViewChanged(); 
    this.authService = auth;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  date = new Date();

  minDate: Date = new Date();

  maxDate: Date = new Date();

  prevBtnDisabled: boolean = false;

  nextBtnDisabled: boolean = false;

  increment(): void {
    this.changeDate(addPeriod(this.view, this.viewDate, 12));
  }

  decrement(): void {
    this.changeDate(subPeriod(this.view, this.viewDate, 12));
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarPeriod): void {
    this.view = view;
    this.dateOrViewChanged();
  }
  today(): void {
    this.changeDate(new Date());
  }

  dateIsValid(date: Date): boolean {
    return date >= this.minDate;
  }

  dateOrViewChanged(): void {
    this.prevBtnDisabled = !this.dateIsValid(
      endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
    );
    this.nextBtnDisabled = !this.dateIsValid(
      startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
    );
    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (!this.dateIsValid(day.date)) {
        day.cssClass = 'cal-disabled';
      }
    });
  }

  stringInside(haystack, needle)
  {
    return haystack == needle;
  }

  log(item){ 
    console.log(item);
    return;
  }

  datas = null;
  justSelectedDate: any  = '';
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedDayViewDate: Date;
  selectedDays: any = '';
  hasEvent: any = 0;
  palace: string = 'No Date Selected';
 




  changeSelectedClass() {
    
  };

  addEvents(data, day) {
    this.datas = data;
    console.log(data._d);
    this.palace = 'Selected Date';
    if(day > 0){
      this.hasEvent = 1;
      this.check = 1;
    }else{
      this.hasEvent = 0;
      this.check = 0;
    }
    const selectedDateTime = '';
    const dateIndex = -1

    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      data.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = data;
    }

    // console.log(data)
    this.justSelectedDate = data;
    // this.events = [
    //   ...this.events,
    //   {
    //     start: startOfDay(data._d),
    //     title: null,
    //     meta :{
    //       number: 3,
    //       total: 25,
    //     },
    //   }
    // ];
    // console.log(this.events);
  }


  addEvent(data, day) {
    this.datas = data;
    console.log(data);
    this.palace = 'Selected Date';
    if(day.events.length > 0){
      this.hasEvent = 1;
      this.check = 1;
    }else{
      this.hasEvent = 0;
      this.check = 0;
    }
    const selectedDateTime = [];
    const dateIndex = -1

    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      data.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = data;
    }

    // console.log(data)
    this.justSelectedDate = data;
    // this.events = [
    //   ...this.events,
    //   {
    //     start: startOfDay(data),
    //     title: null,
    //     meta :{
    //       number: 3,
    //       total: 25,
    //     },
    //   }
    // ];
  }

  checkIsActive(date) {
    return (this.datas === this.justSelectedDate);
  }

  place (f) {
    if(f == 0){
      return 'No Date Selected';
    }else{
      return 'Selected Date';
    }
  }

  checkTrue(e, d){
    return new Date(e) == new Date(d)
  }


  avail = null;

  available (e) {
    if(e == true){
       var availabl = '1';
       return false
    }
  }

  ngOnInit(): void {
    this.fetchEvents();
  }


  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];
    const token = this.authService.getToken();
      console.log(token)

      const httpHeaders = new HttpHeaders({
        'Authorization': token
      })

    const params = new HttpParams()
      .set('activityid', '130')
      



    // this.events$ = this.http
    //   .get('Api/Booking/CalenderReservation', { params, headers: httpHeaders })
    //   .pipe(
    //     map(({ results }: { results: bookings[] }) => {
    //       return results.map((book: bookings) => {
    //         return {
    //           start: new Date(
    //             book.activity_End 
    //           ),
    //           title: null
    //         };
    //       });
    //     })
    //   ).subscribe(results => console.log(results));

  
  this.http
    .get('Api/Booking/CalenderReservation', { params, headers: httpHeaders }).subscribe(results => {
      results.map((val, index) => {
        console.log(val);
        this.events.push({
          start: new Date(val.activity_Start),
          title: null,
          meta: {
            number: 0,
            total: 0
          }
        });
      });
    });
    console.log(this.events);
  }


  dayView: DayViewHour[];


  dayClicked(day: CalendarMonthViewDay): void {
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDays.findIndex(
      selectedDay => selectedDay.date.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
    }
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
