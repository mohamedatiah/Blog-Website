import { TestBed } from '@angular/core/testing';

import { SkipincepectorService } from './skipincepector.service';

describe('SkipincepectorService', () => {
  let service: SkipincepectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkipincepectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
