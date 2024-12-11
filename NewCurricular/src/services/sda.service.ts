import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class SdaService {
  constructor(private http: HttpClient) {}

  newSda(
    curs: string,
    groupLetter: string,
    endDate: Date,
    description: string,
    title: string,
    uuid_center: string,
    startDate: Date
  ): Observable<any> {
    // Ensure date serialization
    const params = {
      curs,
      groupLetter,
      endDate: endDate.toISOString(),
      description,
      title,
      uuid_center,
      startDate: startDate.toISOString(),
    };

    return this.http.post<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.newSda}`, // Template literals for readability
      { params }
    );
  }

  getAllSdas(): Observable<any> {
    return this.http.get<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.getAllSdas
    );
  }

  getSdaByGroupName(groupValue: string): Observable<any> {
    // Ensure date serialization
    const params = {
      groupValue,
    };

    return this.http.get<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.newSda}`, // Template literals for readability
      { params }
    );
  }
}
