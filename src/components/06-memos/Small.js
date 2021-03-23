import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('Me volvi a llamar :C');

  return <small>{value}</small>;
});
