import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
=======
import { AuthService } from './auth';

describe('Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
>>>>>>> origin/develop
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
