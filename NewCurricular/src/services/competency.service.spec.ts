import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { CompetencyService } from './competency.service';
import { provideHttpClient } from '@angular/common/http';

describe('CompetencyService', () => {
  let service: CompetencyService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompetencyService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CompetencyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should get competency description by id ', () => {
    const dummyData = [
      {
        UUID: 'BEFFDAA8-FF0D-4BB6-9BE8-038FBE462535',
        UUID_CompetencyName: '9AAEA337-58AE-4F5F-957B-B0948173F615',
        Descripcion:
          'Traduir problemes i interpretar situacions quotidianes fent-ne una representació matemàtica personal a través de conceptes, eines i estratègies per analitzar-ne els elements més rellevants.',
      },
    ];
    service
      .getCompetencyDescriptionById('BEFFDAA8-FF0D-4BB6-9BE8-038FBE462535')
      .subscribe((data) => {
        expect(data).toEqual(dummyData);
      });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/Competency/competencyDescriptionPl/BEFFDAA8-FF0D-4BB6-9BE8-038FBE462535'
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
  it('Should get competency Name by id ', () => {
    const dummyData = [
      {
        UUID: 'F368AA61-9781-4632-8DC3-24792C2266F0',
        UUID_CompetencyType: 'F1D28FEB-9507-4CA1-875D-DA9A995C76D1',
        Description: 'Llengua estrangera, 1a',
        Tipo: null,
      },
    ];
    service
      .getAllCompetencyNameById('F368AA61-9781-4632-8DC3-24792C2266F0')
      .subscribe((data) => {
        expect(data).toEqual(dummyData);
      });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/Competency/competencyNamePl/F368AA61-9781-4632-8DC3-24792C2266F0'
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
