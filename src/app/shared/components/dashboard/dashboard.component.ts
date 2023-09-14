import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../../services/heading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _headingService: HeadingService
  ) { }

  ngOnInit(): void {
    this._headingService.heading$.next('dashboard')

  }

}
