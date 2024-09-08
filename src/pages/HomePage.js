import React from 'react';
import { Link } from 'react-router-dom';
import MovingLogo from '../components/MovingLogo';

const HomePage = () => {
  const logos = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg'
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-88px)]">
      <h1 className="text-5xl font-bold mb-8 text-center">Welcome to LegalEase AI</h1>
      <div className="flex space-x-8 mb-12">
        {logos.map((logo, index) => (
          <MovingLogo key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      <div className="flex space-x-4">
        <Link to="/signup" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
          Sign Up
        </Link>
        <Link to="/demo" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
          Try Demo
        </Link>
      </div>
    </div>
  );
};

export default HomePage;