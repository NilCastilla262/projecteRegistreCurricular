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
});
