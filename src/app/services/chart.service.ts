import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getChart(date: string): Observable<any> {

    if (date === "today") {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/today`)
    } else if (date === "yesterday") {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/yesterday`)
    } else if (date === "week") {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/week`)
    } else if (date === "month") {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/month`)
    } else if (date === "year") {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/year`)
    } else {
      return this.http.get<any>(`${environment.apiURL}/api/0001/chart/today`)
    }
  }

}
