import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private _http: HttpClient) { }
  public getCli(city: string): Observable<any> {


    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=47407c44d80ab6e89f74beed665c147d`);
  }

}
