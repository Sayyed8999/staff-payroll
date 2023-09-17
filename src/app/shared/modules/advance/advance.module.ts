import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdvanceFormComponent } from './advance-form/advance-form.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';



@NgModule({
  declarations: [
    AdvanceFormComponent,
    AdvanceTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdvanceModule { }
