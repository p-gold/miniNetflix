import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../services/favorites.service";
import { MovieModel } from "../app-model";
@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites: MovieModel[];

  constructor(private favList: FavoritesService) {
    this.favList.onAdded.subscribe(added => {
      console.log("Added");

      this.favorites = this.favList.mv;
    });
  }

  ngOnInit() {
    this.favorites = this.favList.mv;
  }
}
