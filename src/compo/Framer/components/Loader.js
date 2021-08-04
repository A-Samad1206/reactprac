import { motion, useCycle } from 'framer-motion';
import React from 'react';
const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.125,
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <div className="xyz">
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      />
      <div onClick={() => cycleAnimation()}>Cycle loader</div>
    </div>
  );
};

export default Loader;
