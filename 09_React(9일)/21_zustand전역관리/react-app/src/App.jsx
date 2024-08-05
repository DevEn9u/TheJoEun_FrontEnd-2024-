import useStore from './stores/store';
import useNumberBaseStore from './stores/numberBaseStore';
import './App.css';

export default function App() {
  const { bears, increasePopulation, decreasePopulation, removeAllBears } =
    useStore();
  const { numberA, numberB, increaseNumberA, increaseNumberB } =
    useNumberBaseStore();

  return (
    <>
      <div className="app">
        <h1>{bears} around here ...</h1>
        <div className="btn_wrap">
          <button type="button" onClick={increasePopulation}>
            one up
          </button>
          <button type="button" onClick={decreasePopulation}>
            one down
          </button>
          <button type="button" onClick={removeAllBears}>
            remove all
          </button>
        </div>
      </div>
      <div className="app">
        <p>numberA: {numberA}</p>
        <button onClick={increaseNumberA}>A증가</button>
        <p>numberB: {numberB}</p>
        <button onClick={() => increaseNumberB(3)}>B증가</button>
      </div>
    </>
  );
}
