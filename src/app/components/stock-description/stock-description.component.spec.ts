import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDescriptionComponent } from './stock-description.component';

describe('StockDescriptionComponent', () => {
  let component: StockDescriptionComponent;
  let fixture: ComponentFixture<StockDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
