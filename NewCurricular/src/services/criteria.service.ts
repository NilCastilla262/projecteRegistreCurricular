import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class CriteriaService {
  constructor(private http: HttpClient) {}
  getAllCriteries(): Observable<any> {
    return this.http.get<any>(
      environment.api_url_Criteria +
        Constant.API_Competency_END_POINT.get_All_Criteria
    );
  }

 
}
