import { useState } from "react";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  // Complete aqui
  const [movies, setMovies] = useState<MovieProps[]>([]);

  return (

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>

  )
}