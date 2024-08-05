import { useState } from 'react';
import type { Todo } from './lib/types';
import Button from './components/Button';
import { getValue, printArray } from './lib/utils';

const init: Todo = [
  {
    id: 1,
    text: '리액트',
    done: false,
  },
  {
    id: 2,
    text: '리액트2',
    done: false,
  },
  {
    id: 3,
    text: '리액트3',
    done: false,
  },
];

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [todos, setTodos] = useState(init);
  const [firstName, setFirstName] = useState('');

  function handleToggle() {
    setToggle(!toggle);
  }
  // 이벤트타입은 종류가 여러가지기 때문에 이벤트핸들러, 여기서는 input에서의 onChange에 갖다 대면 타입을 알려주고 복사해서 Handler라는 텍스트는 지우고 쓰기
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  // 타입 단언 as
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.target as HTMLElement;
    console.log(btn.textContent);
  }

  printArray<number>([1, 2, 3]);

  const car = {
    color: 'red',
    speed: 300,
    price: 2000000,
  }
  
  // car 객체의 key 확인
  console.log(getValue(car, 'price'))

  return (
    <div>
      <Button onClick={handleToggle}>{toggle ? 'show' : 'hide'}</Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" value={firstName} onChange={handleChange} />
      <p>First Name: {firstName}</p>
      <button type="button" onClick={handleClick}>
        클릭
      </button>
    </div>
  );
}
