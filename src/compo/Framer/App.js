import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Model from './components/Model';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  return (
    <Router>
      <AppTwo />
    </Router>
  );
};
function AppTwo() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const [showModel, setShowModel] = useState(false);
  const location = useLocation();
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Model showModel={showModel} setShowModel={setShowModel} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModel(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModel={setShowModel} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;