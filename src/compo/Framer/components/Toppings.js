import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
    border: '2px solid red',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      //  delay: 0.5
    },
    border: '2px solid green',
  },
  exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};
const nextVariants = {
  initial: { x: '-110vw' },
  animate: { x: 0, transition: { type: 'spring', stiffness: 400 } },
};
const btnVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 8px rgb(255,255,255)',
    boxShadow: '0 0 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
      type: 'spring',
      stiffness: 900,
    },
  },
  animate: {
    transition: { delay: 2 },
    x: [0, -20, 20, -20, 20, -20, 20, 0],
  },
};
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 400 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={btnVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
