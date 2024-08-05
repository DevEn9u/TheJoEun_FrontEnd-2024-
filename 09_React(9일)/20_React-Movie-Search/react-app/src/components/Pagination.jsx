import styles from './Pagination.module.css';
import { sliceArrayByLimit } from '../../lib/utils';
import { useState, useEffect } from 'react';

export default function Pagination({ page, setPage, totalPage, limit }) {
  // 현재페이지 배열
  const [currentPageArray, setCurrentPageArray] = useState([]);
  // 전체페이지 배열
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    // page 번호가 증가하다가 다음 page 그룹으로 넘어가는 순간 전체 page 배열에서 다음 배열로 상태 변
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      // page 번호가 감소하다가 이전 page 그룹으로 넘어가는 순간 전체 page 배열에서 이전 배열로 상태변경
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  // totalPage, limit으로 페이지번호 배열 세트 생성
  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <div className={styles.pagination}>
      {/* page 번호가 1이되면 이전 버튼 안보임 */}
      {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}
      {currentPageArray?.map((num) => (
        // 배열로 넘어올 떄 num은 0부터 시작이므로 num + 1
        <button
          type="button"
          key={num}
          onClick={() => setPage(num + 1)}
          className={`${styles.num_btn} ${
            page === num + 1 ? styles.active : ''
          }`}
        >
          {num + 1}
        </button>
      ))}
      {/* page 번호가 totalPage, 즉 마지막 번호가 되면 다음 버튼 안보임 */}
      {page !== totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
