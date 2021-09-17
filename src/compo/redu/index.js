import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'ADD':
      return ++state;
    case 'SUB':
      return --state;
    default:
      return state;
  }
};

const Index = () => {
  const [count, dispatch] = useReducer(reducer, 8);
  const [countOne, dispatchOne] = useReducer(reducer, 10);
  console.log('Count', count);
  return (
    <div>
      <h1>Count:-{count}</h1>
      <button onClick={() => dispatch('ADD')}>Add</button>
      <button onClick={() => dispatch('SUB')}>Sub</button>
      <hr />
      <h1>countOne:-{countOne}</h1>
      <button onClick={() => dispatchOne('ADD')}>Add</button>
      <button onClick={() => dispatchOne('SUB')}>Sub</button>
    </div>
  );
};
export default Index;
