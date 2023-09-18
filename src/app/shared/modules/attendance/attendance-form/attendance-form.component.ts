import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {
  signupform!: FormGroup

  // isfullday:boolean=false
  employeename: Array<any> = []
  filteredOptions!: Observable<string[]>;
  constructor(private _employeeService: EmployeeService, private attendanceservice: AttendanceService) { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      EmployeeName: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      inTime: new FormControl(null, [Validators.required]),
      outTime: new FormControl(null, [Validators.required]),
      isfullday: new FormControl(null)
    })
    this.getemployeeName()
  }

  attendanceformsubmit() {
    if (this.signupform.valid) {
      // console.log(this.signupform.value);  
      this.attendanceservice.createattendanceinfo(this.signupform.value)
        .subscribe((res) => {
          console.log(res);

        })
    }
  }

  getemployeeName() {
    this._employeeService.getAllEmployeeNames()
      .subscribe((res) => {
        this.employeename = res
      })
    this.filteredOptions = this.signupform.controls['EmployeeName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.employeename.filter(option => option.toLowerCase().includes(filterValue));
  }



}
