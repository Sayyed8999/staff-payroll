import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceFormComponent } from '../../attendance-form/attendance-form.component';





@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit {

 

  constructor(public _dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openattendanceForm(){
  this._dialog.open(AttendanceFormComponent)
  }

}
