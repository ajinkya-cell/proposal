import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProposalQuestionProps {
  onAnswer: (answer: boolean) => void;
}

export function ProposalQuestion({ onAnswer }: ProposalQuestionProps) {
  return (
    <>
      <motion.h1 
        className="text-6xl md:text-9xl font-black text-white mb-12 text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        WILL YOU BE MY GIRL
      </motion.h1>
      <div className="flex gap-4">
        <motion.button
          className="px-8 py-4 bg-pink-500 text-white rounded-lg text-xl font-bold hover:bg-pink-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer(true)}
        >
          YES!
        </motion.button>
        <motion.button
          className="px-8 py-4 bg-gray-700 text-white rounded-lg text-xl font-bold hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer(false)}
        >
        NO ( PLEASE SAY YES)
        </motion.button>
      </div>
    </>
  );
}