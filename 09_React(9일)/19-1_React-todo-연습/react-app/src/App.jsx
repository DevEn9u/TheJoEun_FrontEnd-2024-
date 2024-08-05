import { useState } from 'react';
import TodoCount from './TodoCount';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import './App.css';


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
  const [todos, setTodos] = useState(init);
  console.log(todos);

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
