import { Component, OnInit, OnDestroy, HostListener, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoneResultService } from '../../services/stone/result/stone-result.service';
import { StoneFilterService } from '../../services/stone/filter/stone-filter.service';

import { FilteredByUserModel } from '../../services/stone/filter/filtered-by-user.model';
import { FilteredByUserService } from '../../services/stone/filter/filtered-by-user.service';

import { CheckScreenType } from '../../services/check-screen-type.service';
import { IStone } from '../../model/IStone';
import { IFilters } from '../../model/IFilters';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Injectable()

@Component({
  selector: 'app-stone-result',
  template: '<ng-container *ngIf="isDesktop"><app-stone-result-d></app-stone-result-d></ng-container><ng-container *ngIf="!isDesktop"><app-stone-result-m></app-stone-result-m></ng-container>',

 // templateUrl: './stone-result.component.html',
  styleUrls: ['./stone-result.component.css'],
  
})
export class StoneResultComponent implements OnInit, OnDestroy {
  isSticky: boolean = false;

  @HostListener('window:scroll')
  checkScroll():void {
    
    this.isSticky = window.pageYOffset >= 250;
    this.hideFilters = !this.isSticky;
   
  }
  listView = false;
  isDesktop = 1;
  loadingFilter = true;
  loadingResult = true;
  hideFilters = true;
  popup = { status: false, message: '' };
  message: string = '';
  stoneResultModel: IStone[] = []; 
  isOpenGlobal: boolean = false;
  private lastOpened: number = -1;
  public filterArr: IFilters[];
  public filterByUserArr: FilteredByUserModel[] = [];
  unsub1: Subscription;
  unsub2: Subscription;
  unsub4: Subscription;
  unsub3: Subscription;
  
 
  
  
  constructor(protected route: ActivatedRoute, public checkScreen: CheckScreenType, public stoneFilter: StoneFilterService,
    public filterByuser: FilteredByUserService, public stoneResultService: StoneResultService) {
   
    
   this.route.queryParams.subscribe(params => {
    console.log("Query string step: "+params['step']);
    });
  }

  ngOnInit() {
 
    this.isDesktop = this.checkScreen.isDesktop;

    this.unsub1 = this.checkScreen.rt.subscribe((data: number) => {
      this.isDesktop = data; 
    });
    this.filterArr = this.stoneFilter.getStoneFilter();
    
    this.unsub2 = this.stoneFilter.getFilters().pipe(
      take(1),
      
)
	.subscribe((params: IFilters[]) => {
      this.loadingFilter = false;
      
      this.filterArr = params;
	  
console.log("hi");
console.log(this.filterArr);
    });
    this.unsub3 = this.stoneResultService.getDataFromApi().subscribe((res: IStone[]) => {
      
      this.stoneResultModel = res;
      this.loadingResult = false;
    });
    this.stoneResultModel = this.stoneResultService.getStoneResult();
   
   
    this.unsub4 = this.filterByuser.filteredByUserArrChanged.subscribe((result: FilteredByUserModel[]) => {
      this.filterByUserArr = result;


    });
    this.filterByUserArr = this.filterByuser.getData();
  }
  ngOnDestroy() {
    this.unsub1.unsubscribe();
    this.unsub2.unsubscribe();
    this.unsub3.unsubscribe();
    this.unsub4.unsubscribe();
  }
  cancel() {
    if (this.lastOpened != -1 ) {
      this.stoneFilter.updateStatus(this.lastOpened, false);
    }
  }
  public openMenuMain(cur: any): void {

    if (this.lastOpened != -1 && this.lastOpened!=cur) {
      this.stoneFilter.updateStatus(this.lastOpened, false);
    }

    this.lastOpened = cur;


    let status = this.stoneFilter.getStatus(cur);
    
    status = !status;
    this.stoneResultService.stoneResultChanged.subscribe((result: IStone[]) => {
      //console.log(result);
      this.stoneResultModel = result;
    });
    
    //this.stoneFilter.updateStatus(cur, status);
    
    this.isOpenGlobal = status;
  }
  onClose() {
    this.popup.status = false;
    this.popup.message = '';
    
  }
  deleteFilterByUser(index: number) {
    this.filterByuser.deleteRow(index);
  }

  deleteAllFilterByUser() {
    this.filterByuser.deleteAll();
  }
  addFilterByUser(b: any) {
    const t: FilteredByUserModel = b.obj; 
    const msg = b.message;
    console.log(msg);
    if (msg == 'add') {
      this.filterByuser.addRow(t);
    }
    else {
      let index = -1;
      for (let i = 0; i < this.filterByUserArr.length; i++) {
        if (this.filterByUserArr[i].id == t.id) {
          index = i;
          break;
        }
      }
      this.deleteFilterByUser(index);
    }
    
  }

}
