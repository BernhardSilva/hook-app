import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('I generate again :C ');

  return (
    <div>
      <p>Child Component 👇</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
    </div>
  );
});
