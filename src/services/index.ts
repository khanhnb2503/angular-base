import { Inject, Injectable } from '@angular/core';
import { BASE_URL, IBaseUrl } from '../constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor(
    @Inject(BASE_URL) private baseUrl: IBaseUrl,
    private http: HttpClient
  ) {
    console.log(this.baseUrl);
  }

  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.baseUrl.api);
  }
}
