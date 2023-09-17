import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getDiffDays(sDate: any, eDate: any) {
    let startDate = new Date(sDate);
    let endDate = new Date(eDate);

    let Time = endDate.getTime() - startDate.getTime();
    return Time / (1000 * 3600 * 24);

  }

}
