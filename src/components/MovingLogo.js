import React from 'react';
import { motion } from 'framer-motion';

const MovingLogo = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      className="w-16 h-16 object-contain"
    />
  );
};

export default MovingLogo;