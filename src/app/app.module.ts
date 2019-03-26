import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackpackProComponent } from './backpack-pro/backpack-pro.component';
import { ActivityCardComponent } from './common/card-activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Common Component
import { ProfileComponent } from './common/dropdown/profile.component';
import { RatingsComponent } from './common/ratings.component';
import { OverviewCardComponent } from './common/overview-card.component';

import { ProHeaderComponent } from './backpack-pro/components/header/header.component';
import { ProFooterComponent } from './backpack-pro/components/footer/footer.component';
import { ProLoginComponent } from './backpack-pro/pages/login/login.component';
import { ProRegisterComponent } from './backpack-pro/pages/register/register.component';
import { ProDashboardHomeComponent } from './backpack-pro/pages/dashboardHome/home.component';
import { CalendarComponent } from './backpack-pro/pages/calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MaterialModule } from './material.module'



@NgModule({
  declarations: [
    AppComponent,
    BackpackProComponent,
    ProfileComponent,
    ActivityCardComponent,
    RatingsComponent,
    ProHeaderComponent,
    ProFooterComponent,
    ProLoginComponent,
    ProRegisterComponent,
    ProDashboardHomeComponent,
    OverviewCardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
