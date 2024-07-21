import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { MovieService } from 'src/app/shared/services/movie/movie.service';


interface JwtPayload {
  id?: string;
  usuario?: string;
  iat?: number;
  exp?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  exists: boolean = false;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    if (this.movies.length === 0) this.exists = false;

    this._movieService.home = true;
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const decodedToken: JwtPayload = jwtDecode(jwt);

      if (decodedToken.id) {
        localStorage.setItem('id', decodedToken.id.toString());
      } else {
        console.error('ID not found in decoded token');
      }


    } else {
      console.error('No JWT token found');
    }
  }

  searchMovies(query: string) {
    if (query.length > 0) {
      this._movieService.searchMovies(query).subscribe((response: any) => {
        this.movies = response.Search;

        if (this.movies.length > 0) this.exists = true;

        console.log(this.movies);

      });
      
    } else {
      this.movies = [];
      this.exists = false;
    }

  }
}
