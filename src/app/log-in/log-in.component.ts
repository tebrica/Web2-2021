import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  buttonTitle:string = "Register"
  login:boolean = true;

  registerLogin(){
    this.login = this.login?false:true;
    this.buttonTitle = this.login?"Register":"Log In";
  }
  @Output() userLogInEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogInEvent(user : object) {
      this.userLogInEvent.emit(user);
  }

}
