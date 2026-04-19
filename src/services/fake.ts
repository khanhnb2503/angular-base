// api.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, IBaseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) config: IBaseUrl
  ) {
    this.baseUrl = config.api;
  }
  
  createUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/create`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  getListUser(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
  }


   getDetailTodo(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
