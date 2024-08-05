import { useReducer, useState } from 'react';
import './App.css';

function counterReducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {state}</p>
      <button type="button" onClick={() => dispatch('increment')}>
        증가
      </button>
      <button type="button" onClick={() => dispatch('decrement')}>
        감소
      </button>
    </div>
  );
}
