import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-essentials';
  loggedUser = null;
  constructor(private router: Router) { }

  ngOnInit():void{

  }

  onUserLogin(user: object) {
    alert('EEEE');
     console.log(user);
  }
  onHome(){
    this.router.navigateByUrl('dashboard')
  }
  onUserLogOut() {
    this.router.navigateByUrl('/logIn');
  }
  onCalls(){
    this.router.navigateByUrl('/calls');
  }
  onDocuments(){
    this.router.navigateByUrl('/documents');
  }
  onDvaCoveka(){
    this.router.navigateByUrl('/dvaCoveka');
  }
  onIncidents(){
    this.router.navigateByUrl('/incidents');
  }
  onSearch(){
    this.router.navigateByUrl('/search');
  }
  onTorba(){
    this.router.navigateByUrl('/torba');
  }
  onSettings(){
    this.router.navigateByUrl('/settings');
  }
  onAlerts(){
    this.router.navigateByUrl('/alerts');
  }
}
