import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      // delay: 0.5
    },
  },
  exit: { y: '100vw', transition: { ease: 'easeInOut' } },
};
const nextVariants = {
  initial: { x: '-110vw' },
  animate: { x: 0, transition: { type: 'spring', stiffness: 400 } },
};
const btnVariants = {
  hover: {
    scale: [1.5, 2],
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
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 400 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={btnVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
