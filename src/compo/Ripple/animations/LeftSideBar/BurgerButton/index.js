import React from 'react';
import './index.css';

const BurgerButton = ({ onClick }) => {
  return (
    <div className="LeftSideBar__BurgerButton" role="button" onClick={onClick}>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default BurgerButton;
