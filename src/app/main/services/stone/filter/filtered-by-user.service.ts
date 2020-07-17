import { Injectable } from '@angular/core';
import { FilteredByUserModel } from './filtered-by-user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilteredByUserService {
  public filteredByUserArr: FilteredByUserModel[] = [];
  public filteredByUserArrChanged = new Subject<FilteredByUserModel[]>();
  constructor() {
    const data = JSON.parse(localStorage.getItem('filteredData'));
    if (data) {
      this.filteredByUserArr = data;
    }
  }
 

  getData() {
    return this.filteredByUserArr.slice();
  }
  deleteRow(index: number) {

    this.filteredByUserArr.splice(index, 1);
    this.filteredByUserArrChanged.next(this.filteredByUserArr.slice());
    localStorage.setItem('filteredData', JSON.stringify(this.filteredByUserArr));
  }
  deleteAll() {

    this.filteredByUserArr.splice(0, this.filteredByUserArr.length);
    this.filteredByUserArrChanged.next(this.filteredByUserArr.slice());
    localStorage.removeItem('filteredData');
  }
  addRow(arr: FilteredByUserModel) {
    const r = this.filteredByUserArr;
    let type = 'add';
    console.log(r);
    console.log(arr);
    for (let i = 0; i < r.length; i++) {
      if (!arr.isSliderType && r[i].id == arr.id && r[i].title == arr.title) {
          r[i]=arr;
         
          type = 'update';
          break;
      }
      else if (r[i].id == arr.id && arr.isSliderType) {
          r[i]=arr;
         
          type = 'update';
          break;
        }
      }
    
    if (type == 'add') {
      this.filteredByUserArr.push(arr);
    }
    this.filteredByUserArrChanged.next(this.filteredByUserArr.slice());
    localStorage.setItem('filteredData', JSON.stringify(this.filteredByUserArr));
  }
}
