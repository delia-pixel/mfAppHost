declare module "remote_library/ButtonLangage";
declare module "remote_library/Header";
declare module "remote_library/MoovieItem";

interface Moovies {
  page: number;
  results: Moovie[];
}

interface Moovie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
