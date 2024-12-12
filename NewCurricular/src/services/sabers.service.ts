import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Constant } from '../Constants/Constant';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class SabersService {
  constructor(private http: HttpClient) {}
  getAllSabersDescription(): Observable<any> {
    return this.http.get<any>(
      environment.api_url_Sabers +
        Constant.API_Competency_END_POINT.get_All_SabersDescription
    );
  }
  getAllSaberCritaris(): Observable<any> {
    return this.http.get<any>(
      environment.api_url_Sabers +
        Constant.API_Competency_END_POINT.get_All_SaberCritaris
    );
  }
}
