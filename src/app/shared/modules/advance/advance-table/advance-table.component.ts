import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeadingService } from 'src/app/shared/services/heading.service';
import { AdvanceFormComponent } from '../advance-form/advance-form.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.scss']
})
export class AdvanceTableComponent implements OnInit {

  empNameArray!: Array<string>
  constructor(
    private _headingService: HeadingService,
    private _dialog: MatDialog,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this._headingService.heading$.next('Advance')
    this.getEmpNames()
  }

  getEmpNames() {
    return this._employeeService.getAllEmployeeNames()
      .subscribe(res => {
        console.log(res);
        this.empNameArray = res
      })
  }
  openAdvanceForm() {
    this._dialog.open(AdvanceFormComponent)
  }
}
