import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.css']
})
export class MovieDetailsModalComponent {
  @Input() movie: any;
  adding: any;

  constructor(public activeModal: NgbActiveModal, private _movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.adding = this.movie;

    console.log(this.movie);

  }

  addFavorite() {
    this.adding = {
      id_usuario: localStorage.getItem('id'),
      title: this.movie.Title,
      year: this.movie.Year,
      poster: this.movie.Poster,
    }

    this._movieService.addFavorite(this.adding).subscribe(data => {
      alert('Agregado a Favoritos!!');

    }, (error) => {
      console.log(error);
      alert('Error al Agregar a Favoritos!!');

    });
  }


}
