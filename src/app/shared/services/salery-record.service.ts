import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleryRecordService {

  constructor(private _httpservice:HttpClient) { }

   url:string =`${environment.fireBaseUrl}/salery.json`

   addsaleryDetails(obj:any):Observable<Array<any>>{
     return this._httpservice.post<Array<any>>(this.url,obj)
   }

   getsalerydetails():Observable<any>{
    return this._httpservice.get<any>(this.url)
    .pipe(
      map((res)=>{
        const SalerydetailsArr=[]
        for (const key in res) {
           let obj ={
              ...res[key],
              id:key
           }
           SalerydetailsArr.unshift(obj)
        }
        return SalerydetailsArr
      })
    )
   }
}
