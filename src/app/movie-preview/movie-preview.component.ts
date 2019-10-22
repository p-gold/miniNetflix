import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { MovieModel } from "../app-model";
import { ActivatedRoute } from "@angular/router";
import { FavoritesService } from "../services/favorites.service";

@Component({
  selector: "app-movie-preview",
  templateUrl: "./movie-preview.component.html",
  styleUrls: ["./movie-preview.component.css"]
})
export class MoviePreviewComponent implements OnInit {
  addedToFavorite = false;
  movie: MovieModel;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private favouritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.movie = this.movieService.movies.filter(m => {
      const mId = this.route.snapshot.params["id"];
      if (m.id == mId) {
        return m;
      }
    })[0];
  }

  addFavMovie() {
    this.addedToFavorite = true;
    this.favouritesService.addFavorite(this.movie);
  }

  checkFav() {
    return this.favouritesService.isVidFav(this.movie.id);
  }

  rmFavMovie() {
    return this.favouritesService.removeFavorite(this.movie.id);
  }
}
