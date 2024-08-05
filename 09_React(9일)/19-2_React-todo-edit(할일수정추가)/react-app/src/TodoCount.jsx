import styles from './TodoCount.module.css';

{
  /* TodoCount에서 todos prop을 {}로 배열로 객체 구조분해해서 받음 */
}
export default function TodoCount({ todos }) {
  // todos 배열 요소중 todo.done이 true인 요소로 새로운 배열 리턴 true인 요소 개수 구하기
  const done = todos.filter((todo) => todo.done).length;

  return (
    <div className={styles.todo_count}>
      완료: {done} / 할 일: {todos.length}
    </div>
  );
}
