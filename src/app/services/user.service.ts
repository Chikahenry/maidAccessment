import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(
      tap(data => this.cache.set(url, data))
    );
  }


  getUserById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(
      tap(data => this.cache.set(url, data))
    );
  }
}
