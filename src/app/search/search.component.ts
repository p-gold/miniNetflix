import { MovieModel } from "./../app-model";
import { ActivatedRoute, Params } from "@angular/router";
import { MovieService } from "./../services/movie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchedMovies: MovieModel[];
  constructor(
    private route: ActivatedRoute,
    private moviesService: MovieService
  ) {}

  ngOnInit() {
    let searchValue = this.route.snapshot.queryParams["searchResult"];
    let regex = new RegExp(searchValue, "gmi");
    this.searchedMovies = this.moviesService.movies.filter(m => {
      if (m.title.search(regex) > -1) return m;
    });

    this.route.queryParams.subscribe((params: Params) => {
      searchValue = params["searchResult"];
      if (searchValue == "") return;
      regex = new RegExp(searchValue, "gmi");
      this.searchedMovies = this.moviesService.movies.filter(m => {
        if (m.title.search(regex) > -1) return m;
      });
    });
  }
}
