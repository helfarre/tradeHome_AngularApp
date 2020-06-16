import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSellPageComponent } from './stock-sell-page.component';

describe('StockSellPageComponent', () => {
  let component: StockSellPageComponent;
  let fixture: ComponentFixture<StockSellPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSellPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
