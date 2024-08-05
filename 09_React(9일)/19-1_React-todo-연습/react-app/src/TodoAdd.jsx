import { useState, useRef } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  let idRef = useRef(todos.length);

  function handleAdd() {
    idRef.current++;
    
    if (txt !== '') {
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

  const enterKey = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className={styles.todo_add}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        onKeyUp={enterKey}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
