import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../05-useLayoutEffect/Layout.css';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Memo Counter: <Small value={counter} />
      </h1>

      <hr />

      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        type="button"
        className="btn btn-outline-primary ml-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
