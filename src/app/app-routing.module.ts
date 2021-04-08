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

const routes: Routes = [
  {path: "", redirectTo: "/logIn",pathMatch: 'full'},
  { path: 'logIn', component: LogInComponent },
  { path: 'calls', component: CallsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'dvaCoveka', component: DvaCovekaComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'torba', component: TorbaComponent },
  {path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LogInComponent];
