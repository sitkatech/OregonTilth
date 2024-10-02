import { TestBed } from '@angular/core/testing';

import { TimeStudiesService } from './time-studies.service';

describe('TimeStudiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeStudiesService= TestBed.get(TimeStudiesService);
    expect(service).toBeTruthy();
  });
});
