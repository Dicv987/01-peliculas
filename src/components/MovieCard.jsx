export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <l1>
        <img width={230} height={345} src={imageUrl} alt={movie.title} />
        <div>
            {movie.title}
        </div>
    </l1>
  );
}
