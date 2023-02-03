import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  return (
    <li className={styles.movieCard}>
      <div>
        <Link to={"/movies/" + movie.id}>
          <img
            width={230}
            height={345}
            src={getMovieImg(movie.poster_path, 300)}
            alt={movie.title}
            className="movieImage"
          />
        </Link>
        <div className={styles.title}>{movie.title}</div>
      </div>
    </li>
  );
}
