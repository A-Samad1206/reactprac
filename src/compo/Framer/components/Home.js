import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';
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
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      // delay: 0.3,
      duration: 0.8,
    },
  },
  exit: { y: '-100vw', transition: { ease: 'easeInOut' } },
};
const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={btnVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
