import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClientTesting(), 
      ],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should send login request and return a token', () => {
    const mockResponse = { token: 'mock-token' };
    const email = 'maria@gmail.com';
    const password = 'Patata123';

    service.login(email, password).subscribe((response) => {
      expect(response.token).toBe(mockResponse.token);
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });

    req.flush(mockResponse); 
  });

  it('should handle error response', () => {
    const email = 'invalid-user@gmail.com';
    const password = 'wrong-password';
    const mockErrorMessage = 'Invalid credentials';

    service.login(email, password).subscribe(
      () => fail('should have failed with 401 error'),
      (error) => {
        expect(error.status).toBe(401);
        expect(error.error).toBe(mockErrorMessage);
      }
    );

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');

    req.flush(mockErrorMessage, { status: 401, statusText: 'Unauthorized' });
  });
});