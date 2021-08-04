import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incAge = useCallback(() => setAge((age) => age + 1), [age]);
  const incSal = useCallback(() => setSalary((salary) => salary + 1), [salary]);
  return (
    <div>
      <Title />
      <div className="flex divide-y flex-row">
        <Count text="Age" count={age} />
        <Button handleClick={incAge}>Inc Age</Button>
      </div>
      <div className="w-1/2 h-0.5 bg-red-700" />
      <div className="flex ">
        <Count text="Salary" count={salary} />
        <Button handleClick={incSal}>Inc Sal</Button>
      </div>
    </div>
  );
};

export default Parent;
