import { TestBed } from '@angular/core/testing';

import { LookupTablesService } from './lookup-tables.service';

describe('LookupTablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupTablesService = TestBed.get(LookupTablesService);
    expect(service).toBeTruthy();
  });
});
