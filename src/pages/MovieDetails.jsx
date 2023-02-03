import { useParams } from "react-router-dom";
import { get } from "../data/httpclient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  console.log({ movieId });
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
      console.log(data);
    });
  }, [movieId]);

  return (
    <div className="detailsContainer">
      <img
        src={getMovieImg(movie.poster_path, 500)}
        alt={movie.title}
        className="col movieImage"
      />
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
