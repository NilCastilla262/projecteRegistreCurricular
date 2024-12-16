import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';
import { Sda } from '../Constants/Sda';

@Injectable({
  providedIn: 'root',
})
export class SdaService {
  constructor(private http: HttpClient) {}

  newSda(sda: Sda): Observable<any> {
    // Ensure date serialization

    return this.http.post<any>(
      `${environment.api_url_Sda}${Constant.API_Competency_END_POINT.newSda}`, // Template literals for readability
      {
        curs: sda.curs,
        groupLetter: sda.groupLetter,
        endDate: sda.endDate,
        description: sda.description,
        title: sda.title,
        uuid_center: sda.uuid_center,
        startDate: sda.startDate,
      }
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
    const url = `${environment.api_url_Sda}${
      Constant.API_Competency_END_POINT.getSdaByGroupName
    }?groupValue=${encodeURIComponent(groupValue)}`;

    return this.http.get<any>(url); // Query parameters are included in the URL
  }
}
