// auth.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BACKEND } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(`${API_BACKEND}/api/auth/login`, { usuario, password });
  }

  register(body: any): Observable<any> {
    return this.http.post<any>(`${API_BACKEND}/api/auth/register`, body);
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('id');

  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }


}
