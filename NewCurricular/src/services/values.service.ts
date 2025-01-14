import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class ValuesService {
  constructor(private http: HttpClient) {}

  //////////////////
  /**functions to create sda values  */
  //////////////////
  NewCriteriVal(UUID_CriteriPl: string, sdaNom: string): Observable<any> {
    return this.http.post<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.newCriteriVal,
      { sdaNom, UUID_CriteriPl }
    );
  }
  NewCompetencyDescriptionVal(
    sdaNom: string,
    UUID_CompetencyDescriptionPl: string
  ): Observable<any> {
    return this.http.post<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.NewCompetencyDescriptionVal,
      { sdaNom, UUID_CompetencyDescriptionPl }
    );
  }
  NewSaberCriteri(
    sdaNom: string,
    UUID_SaberCriteriPl: string
  ): Observable<any> {
    return this.http.post<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.NewSaberCriteri,
      { sdaNom, UUID_SaberCriteriPl }
    );
  }
  NewSabersDescriptionVal(
    sdaNom: string,
    UUID_SabersDescriptionPl: string
  ): Observable<any> {
    return this.http.post<any>(
      environment.api_url_Competency +
        Constant.API_Competency_END_POINT.NewSabersDescriptionVal,
      { sdaNom, UUID_SabersDescriptionPl }
    );
  }
  /** function to get elements using sda and plantilla */
  // getValBySdaPl(
  //   UUID_Sda: string,
  //   UUID_CompetencyDescriptionPl: string,
  //   tableName: string
  // ): Observable<any> {
  //   const params = {
  //     UUID_Sda,
  //     UUID_CompetencyDescriptionPl,
  //     tableName,
  //   };

  //   return this.http.get<any>(
  //     `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.getValBySdaPl}`,
  //     { params }
  //   );
  // }

  getValBySdaPl(UUID_Sda: string, UUID_Pl: string, tableName: string) {
    const body = {
      UUID_Sda,
      UUID_Pl,
      tableName,
    };
    return this.http.post<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.getValBySdaPl}`,
      body
    );
  }

  //change bool values
  /*   toggleTreballat(
    tableName: string,
    UUID_Sda: string,
    UUID_Pl: string
  ): Observable<any> {
    const params = {
      tableName,
      UUID_Sda,
      UUID_Pl,
    };
    console.log(
      'req',
      this.http.post<any>(
        `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.toggleTreballat}`,
        { params }
      )
    );
    console.log(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.toggleTreballat}`
    );
    console.log({ params });
    return this.http.post<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.toggleTreballat}`,
      { tableName, UUID_Sda, UUID_Pl }
    );
  } */
  toggleTreballat(
    tableName: string,
    UUID_Sda: string,
    UUID_Pl: string
  ): Observable<any> {
    const params = { tableName, UUID_Sda, UUID_Pl };

    console.log('Request parameters:', params);

    const url = `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.toggleTreballat}`;
    console.log('Request URL:', url);

    return this.http.post<any>(url, params).pipe(
      tap((response) => {
        console.log('Response received:', response);
        if (!response) {
          console.warn('No response body received.');
        }
      })
    );
  }
}
