import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:5000/professor';

  constructor(private http: HttpClient) {}


  getData(searchTerm: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${searchTerm}`;
    return this.http.get<any>(apiUrl);
  }
  addProfessor(data: any,authorId:string): Observable<any> {
      return this.http.post(`${this.baseUrl}`, data);
    }


deleteProfessor(authorId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${authorId}`);
  }
editProfessor(authorId: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${authorId}`, data);
}
}

