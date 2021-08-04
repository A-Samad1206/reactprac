import React, { useState } from 'react';
import { ATMCard } from 'atm-card-react';

function App() {
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(22);
  const [holder, setHolder] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <ATMCard
      number={number}
      month={month}
      year={year}
      holder={holder}
      cvv={cvv}
    />
  );
}

export default App;
