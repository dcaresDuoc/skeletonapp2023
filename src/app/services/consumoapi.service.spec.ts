import { TestBed } from '@angular/core/testing';

import { ConsumoapiService } from './consumoapi.service';

describe('ConsumoapiService', () => {
  let service: ConsumoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
