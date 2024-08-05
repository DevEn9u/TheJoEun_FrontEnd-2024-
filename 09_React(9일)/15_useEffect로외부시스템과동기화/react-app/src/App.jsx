import './App.css';
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount((prev) => prev + 1);
      console.log('타이머 실행중');
    }

    const intervalId = setInterval(onTick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        카운터 토글
      </button>
      {isShow && <Counter />}
    </div>
  );
}
