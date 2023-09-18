import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { EmployeesModule } from './shared/modules/employees/employees.module';
import { AdvanceModule } from './shared/modules/advance/advance.module';
import { AttendanceModule } from './shared/modules/attendance/attendance.module';
import { LeavesModule } from './shared/modules/leaves/leaves.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EmployeesModule,
    AdvanceModule,
    // AttendanceModule,
    LeavesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
