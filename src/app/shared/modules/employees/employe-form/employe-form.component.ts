import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.scss']
})
export class EmployeFormComponent implements OnInit {

  employeForm!: FormGroup
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeForm = this._fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      contact: [null, Validators.required],
      email: [null, Validators.required],
      currentAddress: [null, Validators.required],
      permentAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      pincode: [null, Validators.required],
      bankName: [null, Validators.required],
      ifscCode: [null, Validators.required],
      salary: [null, Validators.required],
    })
  }
  flag: boolean = false
  sameAddres() {

    this.flag = !this.flag

    if (this.flag) {
      this.employeForm.controls['permentAddress'].patchValue(this.employeForm.controls['currentAddress'].value)
    } else {
      this.employeForm.controls['permentAddress'].reset()
    }

  }

  onEmployeAdd() {
    if (this.employeForm.valid) {
      console.log(this.employeForm.value);
    }

  }
}
