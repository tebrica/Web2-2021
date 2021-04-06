import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() userRegisterObject = new EventEmitter<object>();
  logInForm = new FormControl('');
  username : string = '';
  password : string = '';
  lastName : string = '';
  name : string = '';

  constructor(private router: Router) { }

  onRegisterSubmit(){
    alert('Succesfully logged in!');
    this.router.navigateByUrl('/dashboard');
    return;
  }

  ngOnInit(): void {
  }

}
