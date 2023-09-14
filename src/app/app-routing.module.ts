import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { EmployeTableComponent } from './shared/modules/employees/employe-table/employe-table.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeTableComponent,
    data: {
      heading: 'Employees'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
