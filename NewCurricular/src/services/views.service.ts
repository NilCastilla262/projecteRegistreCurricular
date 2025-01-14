import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  constructor(private http: HttpClient) {}

  GetViewCompetencyDescriptionVal(UUID_Sda: string): Observable<any> {
    return this.http.get<any>(
      environment.api_url_views +
        Constant.API_VIEWS_END_POINT.GetViewCompetencyDescriptionVal,
      {
        params: { UUID_Sda },
      }
    );
  }
  GetViewSabersDescriptionVal(UUID_Sda: string): Observable<any> {
    return this.http.get<any>(
      environment.api_url_views +
        Constant.API_VIEWS_END_POINT.GetViewSabersDescriptionVal,
      {
        params: { UUID_Sda },
      }
    );
  }
  GetViewCriteriaVal(UUID_Sda: string): Observable<any> {
    return this.http.get<any>(
      environment.api_url_views +
        Constant.API_VIEWS_END_POINT.GetViewCriteriaVal,
      {
        params: { UUID_Sda },
      }
    );
  }
  GetViewSaberCriteriaVal(UUID_Sda: string): Observable<any> {
    return this.http.get<any>(
      environment.api_url_views +
        Constant.API_VIEWS_END_POINT.GetViewSaberCriteriaVal,
      {
        params: { UUID_Sda },
      }
    );
  }
}
