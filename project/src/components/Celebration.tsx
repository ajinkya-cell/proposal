import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Celebration() {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-pink-500 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        I LOVE YOU 💖
      </motion.h1>
      <div className="hearts grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <Heart 
            key={i}
            className="text-pink-500 mx-auto"
            size={48}
          />
        ))}
      </div>
    </div>
  );
}