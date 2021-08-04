import React, { memo } from 'react';

const Title = () => {
  console.log('Title');
  return (
    <h1 className="font-bold text-gray-700 text-lg m-16">Optimization:-</h1>
  );
};

export default memo(Title);
