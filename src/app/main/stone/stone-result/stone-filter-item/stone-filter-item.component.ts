import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

import { Subject } from 'rxjs';

import { FilteredByUserModel } from '../../../../main/services/stone/filter/filtered-by-user.model';
import { StoneFilterService } from '../../../../main/services/stone/filter/stone-filter.service';
import { FilteredByUserService } from '../../../../main/services/stone/filter/filtered-by-user.service';
import { SearchModel } from '../../../../main/services/search.model';

import { IFilters } from '../../../../main/model/IFilters';
import { CheckScreenType } from '../../../services/check-screen-type.service';


@Component({
  selector: 'app-stone-filter-item',
  template: '<ng-container *ngIf="isDesktop"><app-stone-filter-item-d></app-stone-filter-item-d></ng-container><ng-container *ngIf="!isDesktop"><app-stone-filter-item-m></app-stone-filter-item-m></ng-container>'


})
export class StoneFilterItemComponent implements OnInit {
  isDesktop = 1;
  @Input() currentItem: any;
  @Output() current: EventEmitter<any> = new EventEmitter<any>();
  @Input() childMessage: boolean;
  checkedItems = [];

  @Input() childPopup = { status: false, message: '' };
  @Output() childPopupChange = new EventEmitter<{ status, message }>();
  minValue: number = 0;
  maxValue: number = 0;
  @Input() StepValues: [] = [];
  options: Options = {
    stepsArray: this.search.caratStepValues,
    // step: this.maxValue,
    floor: this.minValue,
    ceil: this.maxValue
    //stepsArray: this.StepValues

  };
  isSlider = false;
  @Input() filter: IFilters;
  @Input() selected;
  @Input() public filterByUserModelSub: FilteredByUserModel[];
  @Output() public filterByUserModelSubChange = new Subject<any>();
  constructor(public search: SearchModel, public filterByUserSub: FilteredByUserService, public checkScreen: CheckScreenType) {

  }

  ngOnInit() {
console.log(this.filter);
    this.isDesktop = this.checkScreen.isDesktop;

    this.checkScreen.rt.subscribe((data: number) => {
      this.isDesktop = data;
    });
    this.filterByUserSub.filteredByUserArrChanged.subscribe((result: FilteredByUserModel[]) => {
      this.filterByUserModelSub = result;

      this.checkedItemsFunc();
    });
    this.filterByUserModelSub = this.filterByUserSub.getData();
    this.checkedItemsFunc();

    // if (this.filter.t == 'r')
    {
      // this.minValue = this.filter.vals[0].min;
      // this.maxValue = this.filter.vals[0].max;
      //const str = eval(this.filter.id + 'StepValues');
      // console.log(str);

      //this.StepValues = this.search.str;
      //console.log(this.StepValues);
    }



  }

  openMenu(cur: number, event: any) {

    if (event.target.className === 'select-choose__link') {
      this.filter.showHide = !this.filter.showHide;
      this.current.emit(cur);
    }

  }
  openPopup(target: any) {
    this.childPopupChange.emit({ status: true, message: 'Hellow' });
  }

  addFilterByUser(id: any, title: string, val: string, type: boolean, target: any) {
    if (target.checked) {
      this.filterByUserModelSubChange.next({ obj: new FilteredByUserModel(id, title, val, type), message: 'add' });

    }
    else {
      this.filterByUserModelSubChange.next({ obj: new FilteredByUserModel(id, title, val, type), message: 'delete' });
    }
    this.checkedItemsFunc();


    // this.filterByUserSub.addRow(t);
  }
  checkedItemsFunc() {
    this.checkedItems = [];
    for (let i = 0; i < this.filterByUserModelSub.length; i++) {
      this.checkedItems[i] = this.filterByUserModelSub[i].id + '_' + this.filterByUserModelSub[i].title;
    }
  }
}
