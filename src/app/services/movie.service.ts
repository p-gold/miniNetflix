import { Injectable } from '@angular/core';
import { MovieModel } from '../app-model';
import { movies } from '../data/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: MovieModel[];

  constructor() {
    this.movies = movies;
  }

  
}
