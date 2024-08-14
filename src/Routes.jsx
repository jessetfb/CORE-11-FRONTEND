// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import profile from './components/profile'; // Ensure Profile component is correctly imported and named
import Register from './components/Registration'; // Ensure Register component is correctly imported and named
import ProtectedRoute from './components/ProtectedRoute';
import HashtagPage from './components/HashtagPage';
import Corepage from './components/Corepage'; // Import the CorePage component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<profile />} /> {/* Route for Profile component */}

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/hashtag/:tag" element={<HashtagPage />} />
        <Route path="/core/:id" element={<Corepage />} /> {/* Route for CorePage */}

      </Routes>
    </Router>
  );
}

export default AppRoutes;
