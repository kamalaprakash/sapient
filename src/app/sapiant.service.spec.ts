import { TestBed } from '@angular/core/testing';

import { SapiantService } from './sapiant.service';

describe('SapiantService', () => {
  let service: SapiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
