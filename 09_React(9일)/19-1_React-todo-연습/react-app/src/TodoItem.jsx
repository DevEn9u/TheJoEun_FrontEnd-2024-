import Checkbox from './components/Checkbox';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
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

  function handleRemove() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className={`${styles.todo_item} ${todo.done ? styles.checked : ''}`}>
      <Checkbox onChange={handleDone}>{todo.text}</Checkbox>
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
