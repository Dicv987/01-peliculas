import { useEffect } from "react";
import { useState } from "react";
import { get } from "../data/httpclient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
      console.log(data)
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((item) => {
        return <MovieCard  key={item.id} movie={item} />;
      })}
    </ul>
  );
}
