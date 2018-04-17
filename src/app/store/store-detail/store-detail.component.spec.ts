import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailComponent } from './store-detail.component';

describe('StoreDetailComponent', () => {
  let component: StoreDetailComponent;
  let fixture: ComponentFixture<StoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
