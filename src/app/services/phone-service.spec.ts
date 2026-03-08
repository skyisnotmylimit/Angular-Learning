import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PhoneService } from './phone-service';

describe('PhoneService', () => {
  let service: PhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
