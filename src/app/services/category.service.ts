import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';

import { environment } from "../../environments/environment";

export interface Category {
  _id?: string | any,
  image?: string | any,
  imageUpload?: any,
  background?: string | any,
  backgroundUpload?: any,
  name: 
  {
    ru: string | any,
    en?: string | any,
    md?: string | any
  },
  hide: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  changeOrder(categories: any[]): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/0001/category/changeOrder`, categories)
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiURL}/api/0001/category`)
  }

  getById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/0001/category/${_id}`);
  }

  create(category: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/0001/category`, category)
  }

  patch(category: any, _id: string): Observable<any> {

    const fd = new FormData()

    if (category.imageUpload) {
      fd.append('image', category.imageUpload, moment().format() )
    }

    fd.append("category", JSON.stringify(category))

    return this.http.patch<any>(`${environment.apiURL}/api/0001/category/${_id}`, fd)
  }

  delete(_id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiURL}/api/0001/category/${_id}`);
  }



}
