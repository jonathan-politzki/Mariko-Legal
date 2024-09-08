import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-4 text-light">
      <h1 className="text-5xl font-bold mb-8 text-center">Welcome to Mariko AI</h1>
      <div className="max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Elevating Legal Communication</h2>
        <p className="text-xl mb-6">
          In the world of legal mediation, communication breakdowns can lead to millions in additional costs. 
          Mariko AI is your preventative solution, ensuring cordial and productive dialogue.
        </p>
        <p className="text-xl">
          Our AI-powered system works silently in the background, gently guiding conversations 
          to prevent toxicity and keep negotiations on track. Your data remains secure and private.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link to="/signup" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
          Get Started
        </Link>
        <Link to="/demo" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
          Try Demo
        </Link>
      </div>
    </div>
  );
};

export default HomePage;