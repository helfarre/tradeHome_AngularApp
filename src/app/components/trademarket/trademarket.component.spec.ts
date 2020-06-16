import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarketComponent } from './trademarket.component';

describe('TrademarketComponent', () => {
  let component: TrademarketComponent;
  let fixture: ComponentFixture<TrademarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrademarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
