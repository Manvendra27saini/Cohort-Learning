
/*
function App() {
  return (
    
    <CurrentCount/>
  );
}

function Counter() {
  return (
    <div className="counter-container">
      <CurrentCount /> 
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom); 
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>;
}

export default App;

*/ 
 // App.jsx
import React from 'react';
import './App.css';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from './assets/store/atoms/counter';

function App() {
  return (
    <RecoilRoot>
      <Buttons />
      <IsEven />
      <Counter />
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 2);
  }

  function decrease() {
    setCount(c => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  if (typeof even !== 'boolean') {
    return <div>Error: Unexpected value</div>;
  }

  return (
    <div>
      {even ? "Even" : "Odd"}
    </div>
  );
}

export default App;
