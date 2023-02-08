import { TestBed } from '@angular/core/testing';

import { NoneNectaApiCallService } from './none-necta-api-call.service';

describe('NoneNectaApiCallService', () => {
  let service: NoneNectaApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoneNectaApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
