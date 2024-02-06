'use client';
import React from 'react';
import useCounterStore from '../app/lib/store';

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
