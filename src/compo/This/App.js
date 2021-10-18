import React, { useEffect, useState } from 'react';

const App = () => {
  let [counter, setCounter] = useState(1);
  useEffect(() => {
    console.log('I run');
  }, [counter]);
  return (
    <div>
      <h2>Counter :-{counter}</h2>
      <button onClick={() => setCounter(++counter)}>Inc</button>
    </div>
  );
};

export default App;
