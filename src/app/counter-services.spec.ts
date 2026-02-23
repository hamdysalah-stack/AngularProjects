import { TestBed } from '@angular/core/testing';

import { CounterServices } from './counter-services';

describe('CounterServices', () => {
  let service: CounterServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
