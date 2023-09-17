import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {
signupform!:FormGroup
isfullday:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      EmployeeName:new FormControl([null],[Validators.required]),
      date:new FormControl([null],[Validators.required]),
      inTime: new FormControl([null],[Validators.required]),
      outTime:new FormControl([null],[Validators.required]),
    })
  }

  attendanceformsubmit(){
    if(this.signupform.valid){
      console.log(this.signupform.value);
      
    }
    
  }

 

}
