import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

const users = [
    {
      username: 'grubor@app.com',
      password: '123'
    },
    {
      username: 'marceta@app.com',
      password: '123'
    },
    {
      username: 'lazovic@app.com',
      password: '123'
    },
];

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() userLogInEvent = new EventEmitter<object>();
  logInForm = new FormControl('');
  username : string = '';
  password : string = '';

  constructor(private router: Router) { }

  onLogInFormSubmit() {
      // Ovde bi trebao poziv na backend za Logovanje...
      for (let i = 0; i < users.length; i++) {
        if (this.username === users[i].username && this.password === users[i].password) {
            alert('Succesfully logged in!');
            this.userLogInEvent.emit(users[i]);
            this.router.navigateByUrl('/dashboard');
            return;
        }
      }
      alert('Wrong username/password combination!');
  }

  ngOnInit(): void {
      
  }

}
