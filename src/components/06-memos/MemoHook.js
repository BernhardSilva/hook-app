import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import '../05-useLayoutEffect/Layout.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);

  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Memo Counter: <small>{counter}</small>
      </h3>

      <hr />

      <p>{memoHeavyProcess}</p>

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
