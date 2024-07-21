import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MovieCardComponent,
    SearchBarComponent,
    HeaderComponent,
    MovieDetailsModalComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ], exports: [
    MovieCardComponent,
    SearchBarComponent,
    HeaderComponent,
    MovieDetailsModalComponent
  ]
})
export class ComponentsModule { }
