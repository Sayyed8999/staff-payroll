import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaveFormComponent } from '../leave-form/leave-form.component';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrls: ['./leave-table.component.scss']
})
export class LeaveTableComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLeaveForm() {
    let dialogConfig = new MatDialogConfig
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    this._dialog.open(LeaveFormComponent, dialogConfig)
  }
}
