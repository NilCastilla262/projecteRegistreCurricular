import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ViewsService } from './views.service';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';
describe('ViewsService', () => {
  let viewsService: ViewsService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewsService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    viewsService = TestBed.inject(ViewsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(viewsService).toBeTruthy();
  });

  it('should fetch competency description data', () => {
    const dummyData = [
      {
        Treballat: false,
        Descripcion:
          'Traduir problemes i interpretar situacions quotidianes fent-ne una representació matemàtica personal a través de conceptes, eines i estratègies per analitzar-ne els elements més rellevants.',
        UUID_Sda: 'DACAE681-B0F2-40EC-92F6-A647E4DCC5C7',
        UUID_ParePl: '9AAEA337-58AE-4F5F-957B-B0948173F615',
        UUID_ElementPl: 'BEFFDAA8-FF0D-4BB6-9BE8-038FBE462535',
      },
      {
        Treballat: false,
        Descripcion:
          'Descobrir propostes artístiques de diferents cultures, èpoques i estils, mitjançant la percepció i la vivència, per desenvolupar la curiositat, el respecte i el gaudi.',
        UUID_Sda: 'DACAE681-B0F2-40EC-92F6-A647E4DCC5C7',
        UUID_ParePl: '176FA1D1-9279-44D8-ACBB-52A15699E092',
        UUID_ElementPl: 'BBFA23F3-4240-4F29-BDD9-089FAEDD980B',
      },
      {
        Treballat: false,
        Descripcion:
          "Comprendre la diversitat lingüística i cultural a partir del reconeixement de les llengües de l'alumnat i la realitat plurilingüe, pluricultural i intercultural, per afavorir la transferència lingüística, identificar i rebutjar estereotips i prejudicis lingüístics, i valorar aquesta diversitat com a font de riquesa cultural.",
        UUID_Sda: 'DACAE681-B0F2-40EC-92F6-A647E4DCC5C7',
        UUID_ParePl: 'F368AA61-9781-4632-8DC3-24792C2266F0',
        UUID_ElementPl: '044DD590-4B57-439D-9DAF-08B73F86D77D',
      },
    ];

    const UUID_Sda = 'some-uuid-value'; // Use any UUID you want for testing

    viewsService.GetViewCompetencyDescriptionVal(UUID_Sda).subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(
      `${environment.api_url_views}${Constant.API_VIEWS_END_POINT.GetViewCompetencyDescriptionVal}?UUID_Sda=${UUID_Sda}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with the dummy data
  });
  it('should fetch sabers description data', () => {
    const dummyData = [
      {
        Descripcion:
          'Understanding various mathematical concepts to solve problems.',
        UUID_Sda: 'A1234567-B890-1234-C567-D8901234E567',
      },
      {
        Descripcion:
          'Exploring the artistic heritage of different cultures and epochs.',
        UUID_Sda: 'A1234567-B890-1234-C567-D8901234E567',
      },
    ];

    const UUID_Sda = 'some-uuid-value'; // Use any UUID you want for testing

    viewsService.GetViewSabersDescriptionVal(UUID_Sda).subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(
      `${environment.api_url_views}${Constant.API_VIEWS_END_POINT.GetViewSabersDescriptionVal}?UUID_Sda=${UUID_Sda}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with the dummy data
  });

  it('should fetch criteria data', () => {
    const dummyData = [
      {
        Criteria: 'Analyze and interpret historical trends.',
        UUID_Sda: 'B2345678-C890-2345-D678-E9012345F678',
      },
      {
        Criteria: 'Apply critical thinking in decision-making scenarios.',
        UUID_Sda: 'B2345678-C890-2345-D678-E9012345F678',
      },
    ];

    const UUID_Sda = 'some-uuid-value'; // Use any UUID you want for testing

    viewsService.GetViewCriteriaVal(UUID_Sda).subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(
      `${environment.api_url_views}${Constant.API_VIEWS_END_POINT.GetViewCriteriaVal}?UUID_Sda=${UUID_Sda}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with the dummy data
  });

  it('should fetch saber criteria data', () => {
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

    const UUID_Sda = 'some-uuid-value'; // Use any UUID you want for testing

    viewsService.GetViewSaberCriteriaVal(UUID_Sda).subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne(
      `${environment.api_url_views}${Constant.API_VIEWS_END_POINT.GetViewSaberCriteriaVal}?UUID_Sda=${UUID_Sda}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Respond with the dummy data
  });
});
