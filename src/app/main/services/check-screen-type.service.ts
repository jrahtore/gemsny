
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CheckScreenType {
  public isDesktop = 1;//1 for dekstop 0 for mobile
  public rt = new Subject();
  private OnResize(event: any) {
    this.updateData(event.target.innerWidth);

    this.rt.next(this.isDesktop);
   
  }


  constructor(private eventManager: EventManager) {
    this.eventManager.addGlobalEventListener('window', 'resize', this.OnResize.bind(this));
   
    this.updateData(window.innerWidth);
  }
  updateData(width) {
    if (environment.maxMobileWidth > width) {
      this.isDesktop = 0;
    }
    else {
      this.isDesktop = 1;
    }
  }
  
}
