import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceFormComponent } from '../../attendance-form/attendance-form.component';
import { HeadingService } from 'src/app/shared/services/heading.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';





@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit {

 

  constructor(public _dialog:MatDialog, private _headingservice:HeadingService,private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this._headingservice.heading$.next('Attendance')
  }

  openattendanceForm(){
  this._dialog.open(AttendanceFormComponent)
  }

}
