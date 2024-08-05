import { useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSearch() {
    // input 요소에 빈칸이 입력되면 버튼 검색 안됨. trim()으로 spacebar 여러번 눌러 빈칸 눌러도 안됨
    if (inputRef.current.value.trim()) {
      setTitle(inputRef.current.value);
      setType('');
      // 검색 버튼 클릭시 페이지를 1페이지로 변경
      setPage(1);
    }
  }

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          ref={inputRef}
          placeholder="제목 검색"
          title="제목 검색"
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
}
