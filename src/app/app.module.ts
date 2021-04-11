import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomeItemComponent } from './home-item/home-item.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SearchComponent } from './search/search.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { DocumentsComponent } from './documents/documents.component';
import { CallsComponent } from './calls/calls.component';
import { TorbaComponent } from './torba/torba.component';
import { DvaCovekaComponent } from './dva-coveka/dva-coveka.component';
import { SettingsComponent } from './settings/settings.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    LogInComponent,
    LoginFormComponent,
    DashboardComponent,
    HomeComponent,
    HomeItemComponent,
    RegisterFormComponent,
    SearchComponent,
    IncidentsComponent,
    DocumentsComponent,
    CallsComponent,
    TorbaComponent,
    DvaCovekaComponent,
    SettingsComponent,
    AlertsComponent,
    DashboardViewComponent,
    ChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
