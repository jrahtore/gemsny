import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CheckScreenType } from '../services/check-screen-type.service';

@Component({
  selector: 'app-header',
  template: '<ng-container *ngIf="isDesktop"><app-desktop-header></app-desktop-header></ng-container><ng-container *ngIf="!isDesktop"><app-mobile-header></app-mobile-header></ng-container>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpened = false;
  isMobileSubMenuOpened = false;
  isDesktop = 1;
  @ViewChild('menu', { static: false }) menuEl: ElementRef;
  constructor(private checkScreen: CheckScreenType) { }
  
  ngOnInit() {
    this.isDesktop = this.checkScreen.isDesktop;
   
    this.checkScreen.rt.subscribe((data: number) => {
      this.isDesktop = data;
    });
  }
  classToggle() {
    
  }
  onMobileMenuClick() {
  
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
    
  }
  onMobileSubMenuClick(ev: Event) {
  //  ev.stopPropagation();
    this.isMobileSubMenuOpened = !this.isMobileSubMenuOpened;
    
  }
}
