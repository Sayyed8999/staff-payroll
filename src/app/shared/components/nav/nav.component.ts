import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeadingService } from '../../services/heading.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  heading: string = 'Dashboard'
  constructor(
    private _headingService: HeadingService
  ) { }



  ngOnInit(): void {
    this._headingService.heading$
      .subscribe(res => {
        this.heading = res
      })
  }

  ngOnDestroy(): void {
    this._headingService.heading$.unsubscribe()
  }


}
