import "../components/MovieCard.css"
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  return (
    <li className="movieCard">
      <Link to={"/movies/"+movie.id}>
        <div className="movieCard">
          <img
            width={230}
            height={345}
            src={getMovieImg(movie.poster_path,300)}
            alt={movie.title}
            className="movieImage"
          />
          <div>{movie.title}</div>
        </div>
      </Link>
    </li>
  );
}
