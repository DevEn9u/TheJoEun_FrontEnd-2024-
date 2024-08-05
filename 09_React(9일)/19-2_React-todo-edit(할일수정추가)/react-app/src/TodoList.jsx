import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  setTodos,
  setShowEdit,
  setSelectedTodo,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        // todoItem으로 todo, todos, setTodos 보내줌
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setShowEdit={setShowEdit}
          setSelectedTodo={setSelectedTodo}
        />
      ))}
    </ul>
  );
}
