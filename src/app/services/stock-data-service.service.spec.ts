import { TestBed } from '@angular/core/testing';

import { StockDataServiceService } from './stock-data-service.service';

describe('StockDataServiceService', () => {
  let service: StockDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
