import './App.css';
import { useState, useRef, useEffect } from 'react';

function Test() {
  useEffect(() => {
    function handleSCroll() {
      console.log(window.scrollY);
    }
    handleSCroll();
    window.addEventListener('scroll', handleSCroll);

    return () => {
      window.removeEventListener('scroll', handleSCroll);
    };
  }, []);

  return <h2>Test</h2>;
}

export default function App() {
  const [isShow, setIsShow] = useState(true);
  
  return (
    <div>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        테스트 컴포넌트 토글
      </button>
      {isShow && <Test />}
    </div>
  );
}
