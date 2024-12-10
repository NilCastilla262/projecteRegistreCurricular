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
    uuidPlantilla: string,
    groupValue: string,
    startDate: Date,
    endDate: Date,
    yearValue: number
  ): Observable<any> {
    // Ensure date serialization
    const params = {
      uuidPlantilla,
      groupValue,
      startDate: startDate.toISOString(), // Serialize to ISO string
      endDate: endDate.toISOString(), // Serialize to ISO string
      yearValue: yearValue.toString(), // Convert number to string
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
