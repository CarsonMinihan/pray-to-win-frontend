import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailyMoodChangesComponent } from './components/daily-mood-changes/daily-mood-changes.component';
import { JournalComponent } from './components/journal/journal.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "calendar", pathMatch: "full"},
  {path: "calendar", component: CalendarComponent},
  {path: "login", component: LoginComponent},
  {path: "journal", component: JournalComponent},
  {path: "dailymood", component: DailyMoodChangesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
