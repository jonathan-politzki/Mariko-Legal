import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-light">
      <nav className="bg-secondary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Mariko AI</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-accent">Home</Link>
            <Link to="/demo" className="hover:text-accent">Demo</Link>
            <Link to="/signup" className="hover:text-accent">Sign Up</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;