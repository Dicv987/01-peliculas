import { useEffect } from "react";
import { useState } from "react";
import { get } from "../data/httpclient";
import { MovieCard } from "../components/MovieCard";

export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
        SetMovies(data.results)
    });
  }, []);

  return (
    <ul>
      {movies.map((item) => {
        <MovieCard />;
      })}
    </ul>
  );
}
