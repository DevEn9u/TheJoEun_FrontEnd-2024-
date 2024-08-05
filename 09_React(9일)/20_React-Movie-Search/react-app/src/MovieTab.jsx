import { useEffect, useState } from 'react';
import styles from './MovieTab.module.css';

export default function MovieTab({ type, setType }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const types = ['All', 'Movie', 'Series', 'Episode'];

  // 외부에서 들어온 type이 빈칸이면 activeIndex 초기화, MovieSearch 컴포넌트에서 handleSearch 함수에서 type을 빈칸으로 초기화 시켰음
  useEffect(() => {
    if (type === '') {
      setActiveIndex(0);
    }
  }, [type]);

  function handleChangeType(index, e) {
    if (e.target.textContent !== 'All') {
      setType(e.target.textContent);
    } else {
      setType('');
    }
    setActiveIndex(index);
  }

  return (
    <div className={styles.movie_tab}>
      {types.map((type, i) => (
        <button
          type="button"
          key={type}
          onClick={(e) => handleChangeType(i, e)}
          className={activeIndex === i ? styles.active : ''}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
