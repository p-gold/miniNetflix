import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieModel } from '../app-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: MovieModel[];

  constructor(private separateMovie: MovieService) { }

  ngOnInit() {
    this.movies = this.separateMovie.movies;
  }

}
