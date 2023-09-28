import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VecsService {

  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/vecs/';

  constructor(private http: HttpClient) { }

  getListDocumentos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
