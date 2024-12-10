import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class ValuesService {
  constructor(private http: HttpClient) {}
  NewCriteriVal(sdaNom: string, UUUID_CriteriPl: string): Observable<any> {
    return this.http.post<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.NewSaberCriteri,
      { sdaNom, UUUID_CriteriPl }
    );
  }
}
