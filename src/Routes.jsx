import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Profile from './components/Profile';
import Register from './components/Registration';
import Corepage from './components/Corepage';
import Dashboard from './Pages/Dashboard';
import CreateHashtags from './components/CreateHashtags';
import ManageHashtags from './components/ManageHashtags';
import CreateCore from './Pages/CreateCore';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard /> 
          } 
        />

        {/* Protected Routes */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/core/:id" element={<Corepage />} />
        <Route path="/create-core" element={<CreateCore />} />

        {/* Board and Hashtags */}
        <Route path="/create-hashtags" element={<CreateHashtags />} />
        <Route path="/board/:id" element={<ManageHashtags />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
