import './App.css';
import { useRef, forwardRef, useEffect } from 'react';

// ref는 {} 안에 넣을 수 없음
const MyInput = forwardRef(function ({ test }, ref) {
  return <input type="text" ref={ref}/>;
});

export default function Form() {
  const inputRef = useRef(null);
  
  function handleClick() {
    inputRef.current.focus();
  }
  useEffect(() => {
    console.log(inputRef);
  }, []);

  return (
    <>
      <MyInput ref={inputRef} test={100} />
      <button type="button" onClick={handleClick}>
        클릭시 입력필드로 focus
      </button>
    </>
  );
}
