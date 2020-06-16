import { TestBed } from '@angular/core/testing';

import { DatageneratorService } from './datagenerator.service';

describe('DatageneratorService', () => {
  let service: DatageneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatageneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
