import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBuyComponent } from './stock-buy.component';

describe('StockBuyComponent', () => {
  let component: StockBuyComponent;
  let fixture: ComponentFixture<StockBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
