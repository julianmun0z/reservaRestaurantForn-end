import { TestBed } from '@angular/core/testing';

import { ClienteserviceService } from './clientservice.service';

describe('ClienteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteserviceService = TestBed.get(ClienteserviceService);
    expect(service).toBeTruthy();
  });
});
