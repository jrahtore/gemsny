import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteredByUserModel {

  constructor(public id: any, public title: string, public vals: any, public isSliderType: boolean = false) { }
}
