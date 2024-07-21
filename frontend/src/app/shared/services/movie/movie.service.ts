import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, API_URL_IMD, API_BACKEND } from '../../../config/config';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  headers = this._authService.getHeaders();
  home = false;

  constructor(private http: HttpClient,
    private _authService: AuthService

  ) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${API_URL}${query}`);
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get<any>(`${API_URL_IMD}${imdbID}`);
  }

  addFavorite(body: any): Observable<any> {
    return this.http.post(`${API_BACKEND}/api/favorite`, body, { headers: this.headers });

  }

  getFavoriteById(id: string): Observable<any> {
    const headers = this._authService.getHeaders();
    return this.http.get<any>(`${API_BACKEND}/api/favorite/${id}`, { headers: this.headers });
  }

  deleteFavoriteMovie(id: string): Observable<any> {
    return this.http.put<any>(`${API_BACKEND}/api/favorite/${id}`, null, { headers: this.headers });
  }



}