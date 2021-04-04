import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/logIn",
    pathMatch: 'full'
  },
  { 
    path: 'logIn', 
    component: LogInComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LogInComponent];