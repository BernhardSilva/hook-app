import React, { useCallback, useState } from 'react';
import '../05-useLayoutEffect/Layout.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter],
  );

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
