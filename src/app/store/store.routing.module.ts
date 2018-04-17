import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

const routes: Routes = [
  { path: 'stores', component: StoreComponent },
  { path: 'store/:id', component: StoreDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
