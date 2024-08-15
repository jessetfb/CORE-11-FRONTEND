// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage'; // Make sure this path is correct
import LandingPage from './Pages/LandingPage';
import Register from './components/registration';
import ProtectedRoute from './components/ProtectedRoute';
import HashtagPage from './components/HashtagPage'; // Import the HashtagPage component
import Dashboard from "./Pages/dashboard"; // Import Dashboard from the Pages folder
import CreateCore from './components/CreateCore';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/hashtag/:tag" 
          element={
            <ProtectedRoute>
              <HashtagPage /> {/* Route for hashtag filtering */}
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard /> {/* Route for the Dashboard page */}
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create-core" 
          element={
            <ProtectedRoute>
              <CreateCore /> {/* Route for creating a new core */}
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
