import React from 'react';

const ChildTwo = ({ name }) => {
  console.log('ChildTwo Render');
  return <div>ChildTwo component - {name}</div>;
};
export default ChildTwo;
export const MemoizedChildTwo = React.memo(ChildTwo);
