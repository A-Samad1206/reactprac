import { motion } from 'framer-motion';
import React from 'react';
const svgVariants = {
  initial: { rotate: '-180deg' },
  animate: {
    rotate: 0,
    transition: { duration: 2 },
  },
};
const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};
const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 50 }}
        dragElastic={8.7}
      >
        <motion.svg
          variants={svgVariants}
          initial="initial"
          animate="animate"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        // initial={{ y: '-250px' }}
        animate={{
          y: [-200, 100, 0],
        }}
        transition={{
          // yoyo: 1,
          delay: 0.5,
          // duration: 2,
          type: 'spring',
          mass: 0.1,
          damping: 8,
        }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
