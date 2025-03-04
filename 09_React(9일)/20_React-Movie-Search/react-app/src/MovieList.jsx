import MovieCard from './MovieCard';
import styles from './MovieList.module.css'; 

export default function MovieList({ movies }) {
  return (
    <div className={styles.movie_list}>
      {/* movies 배열 길이가 1 이상인 경우 렌더링하고 undefined일 경우 length 자체를 실행하지 않음 */}
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </div>
  );
}
