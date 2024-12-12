import { TestBed } from '@angular/core/testing';

import { SabersService } from './sabers.service';

describe('SabersService', () => {
  let service: SabersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
