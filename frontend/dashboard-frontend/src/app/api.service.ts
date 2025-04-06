import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:5000/professor';

  constructor(private http: HttpClient) {}

  // Get data with dynamic search term
  getData(searchTerm: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${searchTerm}`; // Append search term to base URL
    return this.http.get<any>(apiUrl);
  }

  // Post data (unchanged)
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
}

