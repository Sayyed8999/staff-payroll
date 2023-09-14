import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeFormComponent } from '../employe-form/employe-form.component';
import { ActivatedRoute } from '@angular/router';
import { HeadingService } from 'src/app/shared/services/heading.service';

@Component({
  selector: 'app-employe-table',
  templateUrl: './employe-table.component.html',
  styleUrls: ['./employe-table.component.scss']
})
export class EmployeTableComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _headingService: HeadingService
  ) { }

  ngOnInit(): void {
    this._headingService.heading$.next('Employee')
  }


  openEmpForm() {
    let dialogConfig = new MatDialogConfig
    // dialogConfig.width = '100%'
    this._dialog.open(EmployeFormComponent, dialogConfig)
  }

}
