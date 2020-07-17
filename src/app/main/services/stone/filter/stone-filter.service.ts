import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { IFilters } from '../../../model/IFilters';
import { IStone } from '../../../model/IStone';
@Injectable({
  providedIn: 'root'
})
export class StoneFilterService {
  environment = environment;
  

  filterArr: IFilters[] = [];
  constructor(private http: HttpClient) {
  }
  updateStatus(index: number, val: boolean) {
    this.filterArr[index].showHide = val;
   
  }
  getStatus(index: number) {
    return this.filterArr[index].showHide;
   
  }
  getStoneFilter() {
    return this.filterArr.slice();
  }
  
  getFilters() {
    let headers2 = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<IFilters[]>(this.environment.apiUrl + 'stone_filters/name/efsdf').pipe(tap(data => {
      this.setData(data);
    }));
  }
  setData(data) {
    this.filterArr = data;
  }
}
