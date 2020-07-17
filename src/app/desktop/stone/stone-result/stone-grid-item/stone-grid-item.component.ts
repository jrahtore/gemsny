import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment';

import { IStone } from '../../../../main/model/IStone';
@Component({
  selector: 'app-stone-grid-item',
  templateUrl: './stone-grid-item.component.html',
  styleUrls: ['./stone-grid-item.component.css']
})
export class StoneGridItemComponent implements OnInit {
  @Input() stoneResult: IStone; 
  constructor() { }
  environment = environment;
  ngOnInit() {
   
    
  }
  redirectUrl(url:string) {

  }
}
