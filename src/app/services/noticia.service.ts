import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }
  public getNews(categoria: string): Observable<any> {
    alert(categoria);
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
        'x-rapidapi-key': '1e1254ad9emsh9a47f8b290caa04p13f68bjsnaf9e03c5c6ce'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=" + categoria, httpOptions);
  }

}
