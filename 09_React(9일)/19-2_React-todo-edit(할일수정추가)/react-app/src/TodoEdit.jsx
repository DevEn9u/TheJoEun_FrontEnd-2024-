import { useEffect, useRef } from 'react';
import styles from './TodoEdit.module.css';

export default function TodoEdit({
  todos,
  setTodos,
  selectedTodo,
  setSelectedTodo,
  setShowEdit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // selectedTodo 객체 업데이트
  function handleChange(e) {
    setSelectedTodo({
      ...selectedTodo,
      text: e.target.value,
    });
  }
  // 배열 요소(todos)의 id와 selectedTodo의 id가 동일할 경우 배열 요소 업데이트
  function handleOk() {
    if (inputRef.current.value.trim()) {
      setTodos(
        todos.map((t) => {
          return t.id === selectedTodo.id
            ? { ...t, text: inputRef.current.value }
            : t;
        })
      );
      setShowEdit(false);
    }
  }

  function enterKey(e) {
    console.log(e.key);
    if (e.key === 'Enter') {
      handleOk();
    }
  }

  function esckey(e) {
    if(e.key === 'Escape') {
      setShowEdit(false);
    }
  }

  return (
    <div className={styles.todo_edit}>
      <input
        type="text"
        ref={inputRef}
        value={selectedTodo.text}
        onChange={handleChange}
        onKeyUp={enterKey}
        onKeyDown={esckey}
      />
      <button type="button" onClick={handleOk}>
        OK
      </button>
    </div>
  );
}
