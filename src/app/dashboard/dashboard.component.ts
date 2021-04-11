import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardViewComponent } from 'src/app/dashboard-view/dashboard-view.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  myself$: Observable<DashboardViewComponent> = of(new DashboardViewComponent("Incidents", 1, 2, 3, 4))
  myself1$: Observable<DashboardViewComponent> = of(new DashboardViewComponent("Plans", 1, 5, 0, 8))
  myself2$: Observable<DashboardViewComponent> = of(new DashboardViewComponent("Documents", 1, 54, 1, 4))
  myself3$: Observable<DashboardViewComponent> = of(new DashboardViewComponent("Work Loads", 1, 0, 6, 4))

  onIncidents(){
    this.router.navigateByUrl('/incidents');
  }
  onPlans(){
    this.router.navigateByUrl('/torba');
  }
  onDocuments(){
    this.router.navigateByUrl('/documents');
  }
  onWorkLoads(){
    this.router.navigateByUrl('/calls');
  }

  ngOnInit() :void{

  }

}
