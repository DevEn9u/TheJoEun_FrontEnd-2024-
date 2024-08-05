import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  const done = todos.filter((todo) => todo.done).length;

  return (
    <div className={styles.todo_count}>
      완료: {done} / 할 일: {todos.length}
    </div>
  );
}
