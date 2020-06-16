import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStocksComponent } from './sell-stocks.component';

describe('SellStocksComponent', () => {
  let component: SellStocksComponent;
  let fixture: ComponentFixture<SellStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
