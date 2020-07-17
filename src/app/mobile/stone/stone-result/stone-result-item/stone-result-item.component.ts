import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { IStone } from '../../../../main/model/IStone';
@Component({
  selector: 'app-stone-result-item',
  templateUrl: './stone-result-item.component.html',
  styleUrls: ['./stone-result-item.component.css']
})
export class StoneResultItemComponent implements OnInit {
  environment = environment;
  @Input() stoneResult: IStone;
  constructor() { }

  ngOnInit() {
  }

}
