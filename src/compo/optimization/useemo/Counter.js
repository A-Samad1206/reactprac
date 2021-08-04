import React, { useState, useMemo } from 'react';

const App = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const cOne = () => setOne(one + 1);
  const cTwo = () => setTwo(two + 2);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return one % 2 === 0;
  }, [one]);
  return (
    <div>
      <button
        className="py-4 px-8 bg-yellow-700 m-4 text-white cursor-pointer"
        onClick={cOne}
      >
        Counter one :-{one}
      </button>
      <div className="text-5xl font-bold">{isEven ? 'Even ' : 'Odd'}</div>
      <button
        className="py-4 px-8 bg-yellow-700 m-4 text-white cursor-pointer"
        onClick={cTwo}
      >
        Counter Two :-{two}
      </button>
    </div>
  );
};

export default App;
