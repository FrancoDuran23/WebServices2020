import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }
  public getCov(pais: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '1e1254ad9emsh9a47f8b290caa04p13f68bjsnaf9e03c5c6ce'
      })
    };
    return this._http.get(`https://covid-19-tracking.p.rapidapi.com/v1/${pais}`, httpOptions);
  }
  public getCov1(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '1e1254ad9emsh9a47f8b290caa04p13f68bjsnaf9e03c5c6ce'
      })
    };
    return this._http.get(`https://covid-19-tracking.p.rapidapi.com/v1`, httpOptions);
  }
}
