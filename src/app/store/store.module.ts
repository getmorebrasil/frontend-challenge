
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreRoutingModule } from './store.routing.module';

@NgModule({
    imports: [
        CommonModule,
        StoreRoutingModule
    ],
    exports: [],
    declarations: [
        StoreComponent,
        StoreDetailComponent
    ],
    providers: [],
})
export class StoreModule { }
