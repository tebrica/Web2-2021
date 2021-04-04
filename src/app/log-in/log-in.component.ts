import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Output() userLogInEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogInEvent(user : object) {
      this.userLogInEvent.emit(user);
  }

}
