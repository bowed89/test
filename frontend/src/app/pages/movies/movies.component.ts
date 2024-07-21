import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  originalMovies: any[] = [];
  exists: boolean = false;

  constructor(private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this._movieService.home = false;
    this.getFavorites();
  }

  searchMovies(query: string) {
    console.log('query', query);
    console.log(this.movies);

    const normalizedQuery = query.toLowerCase();
    this.movies = this.originalMovies.filter((movie: any) =>
      movie.title.toLowerCase().includes(normalizedQuery)
    );

    if (this.movies.length > 0) {
      this.exists = true;
    } else {
      this.exists = false;
    }


  }

  getFavorites() {
    const id = localStorage.getItem('id');
    if (id) {
      this._movieService.getFavoriteById(id).subscribe((response: any) => {

        if (response.data.length > 0) {
          this.exists = true
        } else {
          this.exists = false;
        };

        const mayus = response.data.map((item: any) => ({
          ...item,
          Title: item.title,
          Year: item.year,
          Poster: item.poster
        }));

        this.originalMovies = mayus;
        this.movies = mayus;


        console.log(this.movies);

      });
    }

  }

  handleDelete() {
    this.getFavorites();  // Actualizar la lista después de eliminar una película
  }
}
