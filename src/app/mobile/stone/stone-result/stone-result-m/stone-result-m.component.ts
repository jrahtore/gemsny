import { Component, OnInit } from '@angular/core';
import { StoneResultComponent } from '../../../../main/stone/stone-result/stone-result.component';

@Component({
  selector: 'app-stone-result-m',
  templateUrl: './stone-result-m.component.html',
  styleUrls: ['./stone-result-m.component.css']
})
export class StoneResultMComponent extends StoneResultComponent  {

  showMFilters = false;
  selected: number=0;
  selectedMobile(item) {
    this.selected = item;
  }
 
}
