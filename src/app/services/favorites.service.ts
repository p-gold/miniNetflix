import { Injectable, EventEmitter } from "@angular/core";
import { MovieModel } from "../app-model";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  // mv: MovieModel[] = [];

  onAdded = new EventEmitter<string>();
  constructor() {
    let sessionFav = sessionStorage.getItem("sessionVids");
    if (!sessionFav) {
      sessionStorage.setItem("sessionVids", JSON.stringify([]));
    } else {
      this.mv = JSON.parse(sessionFav);
    }
  }

  get mv(): MovieModel[] {
    return JSON.parse(sessionStorage.getItem("sessionVids"));
  }

  set mv(value: MovieModel[]) {
    sessionStorage.setItem("sessionVids", JSON.stringify(value));
  }

  addFavorite(data: MovieModel) {
    //  get movie id
    let mId = data.id;

    // Check if any video has this id
    let movieExist = this.mv.filter(m => m.id == mId);

    if (movieExist.length > 0) return;

    this.mv = [...this.mv, data];
    this.onAdded.emit("added");
    console.log(this.mv);
  }

  // Remove from favorites
  removeFavorite(id: number) {
    this.mv = this.mv.filter(m => m.id !== id);
    this.onAdded.emit("added");

  }

  isVidFav(id: number) {
    return this.mv.filter(v => v.id === id).length > 0 ? true : false
  }
}
