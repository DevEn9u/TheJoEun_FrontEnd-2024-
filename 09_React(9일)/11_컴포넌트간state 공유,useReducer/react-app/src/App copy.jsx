import { useReducer, useState } from 'react';
import './App.css';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>
        증가
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        감소
      </button>
    </div>
  );
}