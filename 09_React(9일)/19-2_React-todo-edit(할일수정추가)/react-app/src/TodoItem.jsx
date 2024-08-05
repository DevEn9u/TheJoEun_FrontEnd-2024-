import Checkbox from './components/Checkbox';
import styles from './TodoItem.module.css';

// TodoList.jsx로부터 todo, todos, setTodos를 prop으로받아옴
export default function TodoItem({
  todo,
  todos,
  setTodos,
  setShowEdit,
  setSelectedTodo,
}) {
  // 배열 데이터 업데이트
  // todo로 각각 넘어온 id와 배열 전체요소(t)의 id를 비교하여 같은 경우 스프레드 문법으로 배열 요소 업데이트(배열 요소 복사하고 done의 value만 변경)
  function handleDone() {
    const nextTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return t;
      }
    });
    setTodos(nextTodos);
  }

  function handleShowEdit() {
    setShowEdit(true);
    setSelectedTodo(todo);
  }

  function handleRemove() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className={`${styles.todo_item} ${todo.done ? styles.checked : ''}`}>
      {/* Checkbox에 onChange프롭에 handleDone 연결 */}
      <Checkbox onChange={handleDone}>{todo.text}</Checkbox>
      <button type="button" onClick={handleShowEdit} className={styles.edit_btn}>
        Edit
      </button>
      <button
        type="button"
        onClick={handleRemove}
        className={styles.remove_btn}
      >
        Remove
      </button>
    </li>
  );
}
