import { StoreService } from './store.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  stores: Store[];
  constructor( private storeService: StoreService ) { }

  ngOnInit() {
    this.storeService.getStores()
    .subscribe(data => {
      this.stores = data;
    });
  }

}
