import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const reset = () => {
    setCounter(initialState);
  };

  // const increment = (factor = 1) => {
  //   setCounter(counter + factor);
  // };

  // const decrement = (factor = 1) => {
  //   setCounter(counter - factor);
  // };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
