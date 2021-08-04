import React from 'react';
import Header from './components/Header';
import IamgeGrid from './components/IamgeGrid';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';
const App = () => {
  return (
    <Provider store={Store()}>
      <Header />
      <IamgeGrid />s
    </Provider>
  );
};

export default App;
