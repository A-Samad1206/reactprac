import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
      delay: 0.5,
      mass: 0.1,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};
const nextVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const Order = ({ pizza, setShowModel }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModel(true);
    }, 5000);
  }, [setShowModel]);
  const [mount, setMount] = useState(true);
  setTimeout(() => setMount(false), 4000);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {mount && (
          <motion.h2 exit={{ y: '-1000px' }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={nextVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={nextVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
