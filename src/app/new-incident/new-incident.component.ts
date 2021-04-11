import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  currentlySelected:string = "BasicInfo";

  constructor() { }

  public logThisShit(value:string) {
    console.log(value);
    this.currentlySelected = value;
  }

  ngOnInit(): void {

  }

}
