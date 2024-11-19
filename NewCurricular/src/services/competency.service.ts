import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class CompetencyService {
  constructor(private http: HttpClient) {}
  getAllCompetencyDescription(): Observable<any> {
    return this.http.get<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.get_All_CompetencyDescription
    );
  }
}
