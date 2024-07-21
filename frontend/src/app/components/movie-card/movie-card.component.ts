import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsModalComponent } from 'src/app/components/movie-details-modal/movie-details-modal.component';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  adding: any;

  constructor(
    public _movieService: MovieService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.adding = this.movie;

  }

  openModal() {
    this._movieService.getMovieDetails(this.movie.imdbID).subscribe(data => {
      const modalRef = this.modalService.open(MovieDetailsModalComponent);
      modalRef.componentInstance.movie = data;
    });
  }

  addFavorite() {
    this.adding = {
      id_usuario: localStorage.getItem('id'),
      title: this.movie.Title,
      year: this.movie.Year,
      poster: this.movie.Poster,
    }

    this._movieService.addFavorite(this.adding).subscribe(() => {
      alert('Agregado a Favoritos!!');

    }, (error) => {
      console.log(error);
      alert('Error al Agregar a Favoritos!!');

    });
  }

  deleteFavorite(id: string) {
    this._movieService.deleteFavoriteMovie(id).subscribe(() => {
      alert('Eliminado Correctamente!!');
      this.onDelete.emit();  

    }, (error) => {
      console.log(error);
      alert('Error al Eliminar Favoritos!!');

    });

  }



}
