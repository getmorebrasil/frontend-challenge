import { Store } from './../shared/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {

  constructor(
    private http: HttpClient
  ) { }

  getStores() {
    return this.http.get<Store[]>('http://challenge.getmore.com.br/stores');
  }

  getStore(_id: number) {
    return this.http.get<Store[]>(`http://challenge.getmore.com.br/stores/${_id}`).map(res => {
      return res;
    });
  }
}
