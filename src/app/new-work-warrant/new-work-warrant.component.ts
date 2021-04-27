import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-work-warrant',
  templateUrl: './new-work-warrant.component.html',
  styleUrls: ['./new-work-warrant.component.css']
})
export class NewWorkWarrantComponent implements OnInit {

  currentlySelected:string = "BasicInfo";
  username:string = "Loged in user";

  constructor() { }

  public logedValue(value:string){
    console.log(value);
    this.currentlySelected = value;
  }

  ngOnInit(): void {
  }

}
