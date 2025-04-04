import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = ' http://127.0.0.1:5000/professor/A5073814953';

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
