import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { SaleryRecordService } from 'src/app/shared/services/salery-record.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-salery-record-form',
  templateUrl: './salery-record-form.component.html',
  styleUrls: ['./salery-record-form.component.scss']
})
export class SaleryRecordFormComponent implements OnInit {
  filteredOptions!: Observable<string[]>;
  employeename: Array<any> = []
  submitsaleryform!:FormGroup
  constructor(private _saleryrecordservice:SaleryRecordService,
    private snackbarservice:SnackbarService,
    private dialogref:MatDialogRef<SaleryRecordFormComponent>,
    private _EmployeeService:EmployeeService, @Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
    this.submitsaleryform=new FormGroup({
      EmpName : new FormControl(null,[Validators.required]),
      saleryDate: new FormControl(null,[Validators.required]),
      totalAdvance : new FormControl(null,[Validators.required]),
      presentDays : new FormControl(null,[Validators.required]),
      saleryAmount: new FormControl(null,[Validators.required])
    })

    this.getemployeename()
    
    this.submitsaleryform.patchValue(this.data)
  }

  

  

  saleryformsubmit(){
   if(this.submitsaleryform.valid){
    //  console.log(this.submitsaleryform.value);
       this._saleryrecordservice.addsaleryDetails(this.submitsaleryform.value)
       .subscribe((res)=>{

        console.log(res);
        
           this.snackbarservice.snackBarOpen("salery record Details added sucessfully")
           this.dialogref.close(true)
          
       },
      )
   }
  }

  onformsubmit(){
     
  }

  getemployeename(){
   this._EmployeeService.getAllEmployeeNames()
   .subscribe((res)=>{
    this.employeename=res
    this.filteredOptions = this.submitsaleryform.controls['EmpName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
   })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.employeename.filter(option => option.toLowerCase().includes(filterValue));
  }

}
