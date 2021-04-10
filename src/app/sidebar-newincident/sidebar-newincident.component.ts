import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-newincident',
  templateUrl: './sidebar-newincident.component.html',
  styleUrls: ['./sidebar-newincident.component.css']
})
export class SidebarNewincidentComponent implements OnInit {

  @Output() onItemSelected = new EventEmitter<string>();

  constructor() { }

  onSidebarItemSelect(value: string) {
    this.onItemSelected.emit(value);
  }

  ngOnInit(): void {

  }

}
