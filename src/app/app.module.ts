import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { DailyMoodChangesComponent } from './pages/daily-mood-changes/daily-mood-changes.component';
import { JournalComponent } from './pages/journal/journal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './shared/services/authservices/auth.guard';
import { AuthguardService } from './shared/services/authservices/authguard.service';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { MoodInfoComponent } from './pages/mood-info/mood-info.component';
import { ChangeListComponent } from './pages/change-list/change-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    LoginComponent,
    DailyMoodChangesComponent,
    JournalComponent,
    NavbarComponent,
    ToastContainerComponent,
    MoodInfoComponent,
    ChangeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
