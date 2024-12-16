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
  getValBySdaPl(
    UUID_Sda: string,
    UUID_CompetencyDescriptionPl: string,
    tableName: string
  ): Observable<any> {
    const params = {
      UUID_Sda,
      UUID_CompetencyDescriptionPl,
      tableName,
    };
    return this.http.get<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.getValBySdaPl}`,
      { params }
    );
  }
  //change bool values
  toggleTreballat(id: string, tableName: string): Observable<any> {
    const params = {
      id,
      tableName,
    };
    return this.http.put<any>(
      `${environment.api_url_Competency}${Constant.API_Competency_END_POINT.toggleTreballat}`,
      { params }
    );
  }
}
