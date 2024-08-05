import { useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSearch() {
    //  빈칸 아닐 때만 검색허용, 검색하면 title 변경, type 초기화
    if(inputRef.current.value.trim()) {
      // Search 버튼 클릭시 Title 초기화
      setTitle(inputRef.current.value);
      // Search 버튼 클릭시 Type 초기화
      setType('');
      // Search 버튼 클릭시 page 1로 초기화
      setPage(1)
    }
  }

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          ref={inputRef}
          placeholder="영화 검색"
          title="영화검색"
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
}
