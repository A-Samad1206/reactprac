import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import './index.css';
import ThemeCtxProvider from './contexts/ThemeContext';
const App = () => {
  return (
    <div className="App">
      <ThemeCtxProvider>
        <Navbar />
        <BookList />
      </ThemeCtxProvider>
    </div>
  );
};

export default App;
