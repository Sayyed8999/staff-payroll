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
<<<<<<< HEAD

=======
import { AttendanceModule } from './shared/modules/attendance/attendance.module';
import { LeavesModule } from './shared/modules/leaves/leaves.module';
>>>>>>> 5997ac3f83481f7ff8fd17d5131df923abe69784

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
<<<<<<< HEAD
    
  
=======
    AttendanceModule,
    LeavesModule,

>>>>>>> 5997ac3f83481f7ff8fd17d5131df923abe69784
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
