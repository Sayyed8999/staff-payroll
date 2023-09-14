import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceTableComponent } from './attendace-table/attendance-table/attendance-table.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';



@NgModule({
  declarations: [
    AttendanceTableComponent,
    AttendanceFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
