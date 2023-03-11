import { TestBed } from '@angular/core/testing';

import { NgDigitWheelService } from './ng-digit-wheel.service';

describe('NgDigitWheelService', () => {
  let service: NgDigitWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDigitWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
