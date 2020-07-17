import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IStone } from '../../../model/IStone';
@Injectable({
  providedIn: 'root'
})
export class StoneResultService {
  environment = environment;
  url: string;
  stoneResult: IStone[] = [];
  stoneResultChanged = new Subject<IStone[]>();
  constructor(private http: HttpClient) {
  }
  getStoneResult() {
    return this.stoneResult.slice();
  }
  getDataFromApi() {
    return this.http.get<IStone[]>(this.environment.apiUrl + 'stone_result/name/test').pipe(tap(data => {
      this.setData(data);
    }));
  }
  setData(stoneResultData: IStone[]) {
    this.stoneResult = stoneResultData;
  }
}
