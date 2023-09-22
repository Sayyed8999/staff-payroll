import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SaleryRecordFormComponent } from '../salery-record-form/salery-record-form.component';
import { SaleryRecordService } from 'src/app/shared/services/salery-record.service';
import { HeadingService } from 'src/app/shared/services/heading.service';

@Component({
  selector: 'app-salery-record-table',
  templateUrl: './salery-record-table.component.html',
  styleUrls: ['./salery-record-table.component.scss']
})
export class SaleryRecordTableComponent implements OnInit {
  






  displayedColumns: string[] = ['EmpName', 'presentDays', 'saleryAmount', 'saleryDate','totalAdvance','edit','delete'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog, private _saleryrecord:SaleryRecordService,private _headingservice:HeadingService) { }

  ngOnInit(): void {
    this.getsalerydetails()
  }

  openEmpForm(){
    let dialogConfig = new MatDialogConfig
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
   this._dialog.open(SaleryRecordFormComponent).afterClosed()
   .subscribe((res)=>{console.log(res);
    if(res){
      this.getsalerydetails()
    }
   })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getsalerydetails(){
     this._headingservice.heading$.next('Salery-Record')
    this._saleryrecord.getsalerydetails()
    .subscribe((res)=>{
      console.log(res,'fds');
       this.dataSource = new MatTableDataSource(res)
       this.dataSource.sort=this.sort
       this.dataSource.paginator=this.paginator
    })
  }


  oneditsaleryform(obj:any){

  }

  ondeletesalerydetails(obj:any){

  }
}
