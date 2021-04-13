import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-new-work-warrant',
  templateUrl: './sidebar-new-work-warrant.component.html',
  styleUrls: ['./sidebar-new-work-warrant.component.css']
})
export class SidebarNewWorkWarrantComponent implements OnInit {

  @Output() onItemSelected = new EventEmitter<string>();

  constructor() { }

  onSidebarItemSelect(value:string){
    this.onItemSelected.emit(value);
  }

  ngOnInit(): void {
  }

}
