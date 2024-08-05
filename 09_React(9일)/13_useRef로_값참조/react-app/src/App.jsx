import './App.css';
import { useState, useRef } from 'react';


export default function Counter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }
  return (
    <button type="button" onClick={handleClick}>
      {countRef.current} times
    </button>
  )
}
