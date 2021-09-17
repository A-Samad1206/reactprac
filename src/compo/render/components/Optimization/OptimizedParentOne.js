import React, { useState } from 'react';
import ChildOne from './ChildOne';

const OptimizedParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log('OptimizedParentOne Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {children}
    </div>
  );
};
const index = () => {
  return (
    <OptimizedParentOne>
      <ChildOne />
    </OptimizedParentOne>
  );
};
export default index;
