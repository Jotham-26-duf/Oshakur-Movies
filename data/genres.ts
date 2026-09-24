export interface Genre {
  id: string;
  name: string;
  image: string;
}

export const genres: Genre[] = [
  {
    id: "1",
    name: "Action",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
  {
    id: "2",
    name: "Adventure",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
  {
    id: "3",
    name: "Comedy",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
  {
    id: "4",
    name: "Drama",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
  {
    id: "5",
    name: "Horror",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
  {
    id: "6",
    name: "Thriller",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
  },
];