import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import {CallsComponent} from './calls/calls.component';
import {DocumentsComponent} from './documents/documents.component';
import {DvaCovekaComponent} from './dva-coveka/dva-coveka.component';
import {IncidentsComponent} from './incidents/incidents.component';
import {SearchComponent} from './search/search.component';
import {TorbaComponent} from './torba/torba.component';
import {SettingsComponent} from './settings/settings.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ChartComponent } from './chart/chart.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { WorkWarrantComponent } from './work-warrant/work-warrant.component';
import { NewWorkWarrantComponent } from './new-work-warrant/new-work-warrant.component';


const routes: Routes = [
  { path: "", redirectTo: "/logIn",pathMatch: 'full'},
  { path: 'logIn', component: LogInComponent },
  { path: 'calls', component: CallsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'dvaCoveka', component: DvaCovekaComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'torba', component: TorbaComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  {path: "settings", component: SettingsComponent },
  {path: "chart", component: ChartComponent },
  { path: "settings", component: SettingsComponent },
  { path: "userinfo", component: UserInfoComponent },
  { path: "newincident", component: NewIncidentComponent },
  { path: "workwarrant", component: WorkWarrantComponent },
  { path: "newworkwarrant", component: NewWorkWarrantComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LogInComponent];
