import { TestBed, async, inject } from '@angular/core/testing';

import { SingleItemPageGuard } from './single-item-page.guard';

describe('SingleItemPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleItemPageGuard]
    });
  });

  it('should ...', inject([SingleItemPageGuard], (guard: SingleItemPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
