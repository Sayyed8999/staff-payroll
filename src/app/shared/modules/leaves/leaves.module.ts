import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveTableComponent } from './leave-table/leave-table.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    LeaveTableComponent,
    LeaveFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatNativeDateModule
  ]
})
export class LeavesModule { }
