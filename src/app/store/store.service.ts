import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  stores: any = [
    {
      id: 1,
      name: 'Ri Happy',
      takeback: 4.335500000000001
    },
    {
      id: 2,
      name: 'Havan',
      takeback: 3.575
    }
  ];

  constructor() { }

  getStores() {
    return this.stores;
  }
}
