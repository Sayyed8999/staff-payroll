import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeFormComponent } from '../employe-form/employe-form.component';

@Component({
  selector: 'app-employe-table',
  templateUrl: './employe-table.component.html',
  styleUrls: ['./employe-table.component.scss']
})
export class EmployeTableComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  openEmpForm() {
    this._dialog.open(EmployeFormComponent)
  }

}
