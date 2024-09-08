import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;