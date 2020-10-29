import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from '@angular/material/button';
import { CalendarComponent } from './calendar/calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatMomentDateModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    MatDatepickerModule,
    MatButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
