import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'preview/:id', component: MoviePreviewComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  },
  {
    path: 'search', component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
