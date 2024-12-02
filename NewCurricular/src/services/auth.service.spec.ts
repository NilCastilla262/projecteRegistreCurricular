import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClientTesting(), // Replacing HttpClientTestingModule
      ],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send login request and return a token', () => {
    const mockResponse = { token: 'mock-token' };
    const email = 'test@example.com';
    const password = 'password123';

    service.login(email, password).subscribe({
      next: (response) => {
        expect(response.token).toEqual(mockResponse.token);
      },
      error: () => fail('Expected a successful login response'),
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });

    req.flush(mockResponse);
  });

  it('should handle error response', () => {
    const mockErrorMessage = 'Invalid credentials';
    const email = 'wrong@example.com';
    const password = 'wrongpassword';

    service.login(email, password).subscribe({
      next: () => fail('Expected login to fail'),
      error: (error) => {
        expect(error.status).toBe(401);
        expect(error.error).toBe(mockErrorMessage);
      },
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockErrorMessage, { status: 401, statusText: 'Unauthorized' });
  });
});
