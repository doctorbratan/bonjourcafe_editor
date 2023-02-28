import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/telegram_code`)
  }

  patch(): Observable<string> {
    return this.http.patch<string>(`${environment.apiURL}/api/telegram_code`, undefined)
  }

  getShift(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/auth/getShift`)
  }

  updateShift(): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/api/auth/updateShift`, {})
  }

  getShiftChange(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/auth/getShiftChange`)
  }

  updateShiftChange(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/api/auth/updateShiftChange`, data)
  }

  getTelegrams(): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiURL}/api/telegram`)
  }

  pathTelegram(_id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/api/telegram/${_id}`, data)
  }

  deleteTelegram(_id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiURL}/api/telegram/${_id}`)
  }

}
