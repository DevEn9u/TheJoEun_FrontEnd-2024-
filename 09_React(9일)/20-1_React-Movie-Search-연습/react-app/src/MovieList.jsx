import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <div className={styles.movie_list}>
      {/* movies 배열의 길이가 1 이상인 경우 렌더링하고 undefined일 결우 length 실행 안함 */}
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
      ) : (
        <p>영화데이터 없음</p>
      )}
    </div>
  );
}
