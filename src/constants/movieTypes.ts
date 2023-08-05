export interface GenreProps {
  text: string;
}

export interface MovieProps {
  id: string;
  titleText: { text: string };
  primaryImage: { url: string };
  releaseYear: { year: number };
  genres: { genres: GenreProps[] };
  ratingsSummary: { aggregateRating: number };
}
