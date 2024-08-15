import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components directly
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import profile from './components/profile'; // Ensure correct component import
import Register from './components/Registration'; // Ensure correct component import
import HashtagPage from './components/HashtagPage';
import Corepage from './components/Corepage'; 
import CreateCore from './Pages/CreateCore'; // Ensure correct component import

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile/:id" element={<profile />} />
        <Route path="/Corepage/:id" element={<Corepage />} />
        <Route path="/CreateCore" element={<CreateCore />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/hashtag/:tag" element={<HashtagPage />} />
        <Route path="/core/:id" element={<Corepage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
