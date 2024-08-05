import './App.css';
import TodoCount from './TodoCount';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
import { useState } from 'react';

// 각 field 항목 데이터 설계
const init = [
  {
    id: 1,
    text: '리액트 배우기',
    done: false,
  },
  {
    id: 2,
    text: '리액트 배우자',
    done: false,
  },
  {
    id: 3,
    text: '리액트 열심히 하자',
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  console.log(selectedTodo);

  return (
    <div className="app">
      <h1>Todo List</h1>
      {/* TodoCount에서 todos prop을 {}로 배열로 객체 구조분해해서 받음 */}
      <TodoCount todos={todos} />
      {/* TodoAdd에서 todos 조작하려면 setTodos도 prop으로 보내줘야 함 */}
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setShowEdit={setShowEdit}
        setSelectedTodo={setSelectedTodo}
      />
      {showEdit && <TodoEdit todos={todos} setTodos={setTodos} setShowEdit={setShowEdit} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />}
    </div>
  );
}
