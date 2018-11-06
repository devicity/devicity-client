import { TestBed } from '@angular/core/testing';

import { LoginServerConnectionService } from './login-server-connection.service';

describe('LoginServerConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServerConnectionService = TestBed.get(LoginServerConnectionService);
    expect(service).toBeTruthy();
  });
});
