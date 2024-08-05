import styles from './TodoAdd.module.css';
import { useState, useRef } from 'react';

// App.jsx에서 보낸 prop todos와 setTodos를 불러오기
export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  let idRef = useRef(todos.length);

  // Add 버튼 클릭시 todos 배열에 객체 형태로 요소를 추가해야 함(id, text, done)
  function handleAdd() {
    // Add 버튼 클릭시만 1씩 증가
    idRef.current++;

    // 입력값이 빈 칸이 아닐때
    if (txt.trim()) {
      setTodos([
        ...todos,
        {
          id: idRef.current,
          text: txt,
          done: false,
        },
      ]);
    } 

    // 값이 입력되고 나면 빈칸으로 바꿔주기
    setTxt('');
  }

  // input 태그 값 엔터키로 입력하기
  const enterkey = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className={styles.todo_add}>
      <input
        type="text"
        // input 태그에서 값을 입력할때마다 txt를 입력되는 값(e.target.value)으로 변경
        onChange={(e) => setTxt(e.target.value)}
        onKeyUp={enterkey}
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
        value={txt}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
