import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';
import { SdaService } from './sda.service';

describe('SdaService', () => {
  let service: SdaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SdaService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SdaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' should fetch sdas by uuid user ', () => {
    const dummyData = [
      {
        Saber: 'Understanding economic models.',
        Criteria: 'Evaluate the impact of economic policies.',
        UUID_Sda: 'C3456789-D901-3456-E789-F0123456G789',
      },
      {
        Saber: 'Understanding linguistic diversity.',
        Criteria: 'Analyze the implications of multilingualism.',
        UUID_Sda: 'C3456789-D901-3456-E789-F0123456G789',
      },
    ];

    const UUID_User = '654654sd654fsdf65-5465'; // Use any UUID you want for testing

    service.getSdasByUser(UUID_User).subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.getAllSdas}?UUID_User=${UUID_User}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with the dummy data
  });
});
