import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment';

import { IStone } from '../../../../main/model/IStone';
@Component({
  selector: 'tr[app-stone-list-item]',
  templateUrl: './stone-list-item.component.html',
  styleUrls: ['./stone-list-item.component.css']
})
export class StoneListItemComponent implements OnInit {
  environment = environment;
  @Input() stoneResult: IStone;
  constructor() { }
  
  ngOnInit() {
  }

}
