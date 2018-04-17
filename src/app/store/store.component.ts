import { StoreService } from './store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  stores: any[];
  constructor( private storeService: StoreService ) { }

  ngOnInit() {
    this.stores = this.storeService.getStores();
  }

}
