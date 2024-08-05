import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={styles.movie_card}>
      <p>{movie.Year}</p>
      <div className={styles.img_wrap}>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://placehold.co/400'
          }
          // 이미지를 데이터로 불러오려고 할 때 파일이 존재하지 않는 경우 오류는 발생하나 엑박을 해당 src로 보여줌
          onError={(e) => (e.target.src = 'https://placehold.co/400')}
          alt={movie.Title}
        />
      </div>
      <div className={styles.txt_wrap}>
        <span>{movie.Type}</span>
        <strong>{movie.Title}</strong>
      </div>
    </div>
  );
}
