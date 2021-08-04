import React, { memo } from 'react';

const Button = ({ handleClick, children }) => {
  console.log('Button - ', children);
  return (
    <button
      onClick={handleClick}
      className="py-4 px-8 bg-yellow-700 m-4 text-white"
    >
      {children}
    </button>
  );
};

export default memo(Button);
