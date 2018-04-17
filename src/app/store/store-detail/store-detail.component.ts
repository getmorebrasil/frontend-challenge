import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from './../store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {

  id: number;
  store: any = {};
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.storeService.getStore(Number(this.id)).subscribe((_store) => {
        this.store = _store;
      });
    });
  }

  ngOndestroy() {
    this.inscricao.unsubscribe();
  }
  voltar() {
    this.router.navigate(['/stores']);
  }
}
