import React, { useState } from 'react';
import OptimizedParentOne from './OptimizedParentOne';
import ChildOne from './ChildOne';

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  console.log('GrandParent');
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParent Count - {newCount}
      </button>
      <OptimizedParentOne newCount={newCount}>
        <ChildOne />
      </OptimizedParentOne>
    </div>
  );
};
export default GrandParent;
