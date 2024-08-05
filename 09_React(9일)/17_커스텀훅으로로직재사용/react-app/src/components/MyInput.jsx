import { useRef, useEffect } from 'react';


export default function MyInput({ shouldFocus, value, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current.focus();
    }
  }, []);
  return <input ref={inputRef} value={value} onChange={onChange} />;
}