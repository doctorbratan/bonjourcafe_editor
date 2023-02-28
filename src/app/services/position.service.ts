import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/api/0001/position`)
  }

  getById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/0001/position/${_id}`);
  }

  getByCategory(_id: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/api/0001/position/category/${_id}`);
  } 

  create(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/0001/position`, data)
  }

  patch(data: any, _id: string): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/api/0001/position/${_id}`, data)
  }

  delete(_id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiURL}/api/0001/position/${_id}`);
  }

  changeOrder(positions: any[]): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/1703/0001/changeOrder`, positions)
  }
}
