import React, { useState } from 'react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted with:', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-light">Join Mariko AI</h1>
      <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="email" className="block text-light mb-2 text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-primary border border-accent rounded-md text-light"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-light mb-2 text-lg">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-primary border border-accent rounded-md text-light"
            required
          />
        </div>
        <button type="submit" className="w-full bg-accent text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors text-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;