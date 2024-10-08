import { TestBed } from '@angular/core/testing';

import { WorkbookCreatedService } from './workbook-created.service';

describe('WorkbookCreatedService', () => {
  let service: WorkbookCreatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkbookCreatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
