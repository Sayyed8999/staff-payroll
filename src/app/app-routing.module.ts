import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { EmployeTableComponent } from './shared/modules/employees/employe-table/employe-table.component';
import { AttendanceModule } from './shared/modules/attendance/attendance.module';
import { AttendanceTableComponent } from './shared/modules/attendance/attendace-table/attendance-table/attendance-table.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeTableComponent,
  },
  {
    path: 'attendance',
    component:AttendanceTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
