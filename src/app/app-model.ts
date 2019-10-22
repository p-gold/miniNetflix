export class MovieModel {
  constructor(
    public popularity: number,
    public vote_count: number,
    public video: boolean,
    public poster_path: string,
    public id: number,
    public adult: boolean,
    public backdrop_path: string,
    public original_language: string,
    public original_title: string,
    public genre_ids: number[],
    public title: string,
    public vote_average: number,
    public overview: string,
    public release_date: string,
    public genres?: string,
    public isFav?: boolean
  ) {}
}
