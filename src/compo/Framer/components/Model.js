import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};
const modalVariants = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: '200px',
    transition: { delay: 0.5 },
  },
};
const Model = ({ showModel, setShowModel }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="model" variants={modalVariants}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
