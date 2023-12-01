import { TestBed } from '@angular/core/testing';

import { AuthdosGuard } from './authdos.guard';

describe('AuthdosGuard', () => {
  let guard: AuthdosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
