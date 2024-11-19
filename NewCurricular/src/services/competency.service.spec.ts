import { TestBed } from '@angular/core/testing';

import { CompetencyService } from './competency.service';

import { provideHttpClient } from '@angular/common/http';
describe('CompetencyService', () => {
  let service: CompetencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CompetencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
