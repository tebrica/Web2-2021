import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-essentials';
  loggedUser = null;

  onUserLogin(user: object) {
    alert('EEEE');
     console.log(user);
  }

  onUserLogOut() {

  }

}
