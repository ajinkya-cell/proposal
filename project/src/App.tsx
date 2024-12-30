import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProposalQuestion } from './components/ProposalQuestion';
import { Celebration } from './components/Celebration';
import { Rejection } from './components/Rejection';
import { useAnswerEffect } from './hooks/useAnswerEffect';

function App() {
  const [answer, setAnswer] = useState<null | boolean>(null);
  useAnswerEffect(answer);

  if (answer === false) {
    return <Rejection />;
  }

  return (
    <motion.div 
      className="container min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {answer === true ? (
        <Celebration />
      ) : (
        <ProposalQuestion onAnswer={setAnswer} />
      )}
    </motion.div>
  );
}

export default App;