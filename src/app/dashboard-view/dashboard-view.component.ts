import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  name:String = "default";
  drafts:Number = 0;
  executing:Number = 0;
  canceled:Number = 0;
  completed:Number = 0;

  constructor(private Name:String, private Drafts:Number, private Executing:Number, private Canceled:Number, private Completed:Number)
  {
    this.name = Name;
    this.drafts = Drafts;
    this.executing = Executing;
    this.canceled = Canceled;
    this.completed = Completed;
  }

  ngOnInit(): void {
  }

}
