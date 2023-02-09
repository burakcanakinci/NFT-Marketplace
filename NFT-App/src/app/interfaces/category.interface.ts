export interface ICategory {
  title: string;
  img: string;
  icon: string;
}
export interface INftCard {
  title: string;
  img: string;
}
export interface INftCards {
  title: string;
  img: string;
  avatar: string;
  name: string;
}
export interface ICard {
  title: string;
  likes: string;
}
export interface IArtist {
  name: string;
  img: string;
  sales: string;
  id: string;
}
export interface ITrend {
  primaryImg: string;
  secondaryImg: string;
  tertiaryImg: string;
  infoTitle: string;
  artistAvatar: string;
  artistName: string;
}
export interface IResponseData {
  id: number;
  name: string;
  job: string;
  createdAt: string;
}
export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
export interface IPeople {
  results: IPerson[];
}
export interface IMovie {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}
export interface IMovies {
  results: IMovie[];
}