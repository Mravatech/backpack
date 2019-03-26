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
