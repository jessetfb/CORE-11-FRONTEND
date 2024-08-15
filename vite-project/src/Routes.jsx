// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Register from './components/registration';
import ProtectedRoute from './components/ProtectedRoute';
import CreateHashtags from './components/CreateHashtags';
import ManageHashtags from './components/ManageHashtags';
import Dashboard from "./Pages/dashboard";

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
          path="/create-hashtags" 
          element={
            <ProtectedRoute>
              <CreateHashtags /> {/* Route for hashtag filtering */}
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/board/:id" 
          element={
            <ProtectedRoute>
              <ManageHashtags /> {/* Route for managing hashtags */}
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;
