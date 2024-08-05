import './App.css';
import { useState, useEffect, useMemo } from 'react';

// 임의의 복잡한 계산
function timeConsuming() {
  let result = 0;

  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }
  console.log('계산완료');
  return result;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [showMsg, setShowMsg] = useState(false);

  function handleCount() {
    setCount(count + 1);
  }

  function handleShowMsg() {
    setShowMsg(!showMsg);
  }

  console.time('시간계산');
  useMemo(() => {
    timeConsuming();
  }, [count]);
  console.timeEnd('시간계산');

  return (
    <>
      {count}
      <button type="button" onClick={handleCount}>
        클릭
      </button>
      <div>
        <button type="button" onClick={handleShowMsg}>
          메세지 {showMsg ? '숨기기' : '보기'}
        </button>
        {showMsg && <p>안녕하세요</p>}
      </div>
    </>
  );
}
