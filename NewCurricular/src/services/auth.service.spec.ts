import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClientTesting],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request with correct credentials to the backend API', () => {
    const mockResponse = { token: 'fake-token' }; // Simulated response from our backend
    const email = 'admin@example.com';
    const password = 'password123';

    service.login(email, password).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/auth/login'); // Matching the backend API route
    expect(req.request.method).toBe('POST'); // Ensures it's a POST request
    expect(req.request.body).toEqual({ email, password }); // Verifies the request payload

    req.flush(mockResponse); // Simulates a successful backend response
  });

  it('should handle login failure from the backend', () => {
    const mockError = { status: 401, statusText: 'Unauthorized' };
    const email = 'wrong@example.com';
    const password = 'wrongpassword';

    service.login(email, password).subscribe(
      () => fail('should have failed with a 401 error'),
      (error) => {
        expect(error.status).toBe(401); // Ensures correct error status
        expect(error.statusText).toBe('Unauthorized'); // Verifies error status text
      }
    );

    const req = httpMock.expectOne('http://localhost:3000/api/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush(null, mockError); // Simulates a backend error response
  });
});
