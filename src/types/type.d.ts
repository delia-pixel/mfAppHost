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

interface MovieItem {
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: 573435;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionMovie[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
}

interface ProductionMovie {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
