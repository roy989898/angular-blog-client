import { TestBed } from '@angular/core/testing';

import { TabNameIconService } from './tab-name-icon.service';

describe('TabNameIconService', () => {
  let service: TabNameIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabNameIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
