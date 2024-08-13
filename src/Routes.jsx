import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Register from './components/registration';
import ProtectedRoute from './components/ProtectedRoute';
import HashtagPage from './components/HashtagPage';
import HashtagsSection from './components/HashtagsSection';
import Dashboard from './Pages/dashboard';
import Core from './components/Core'; // Import Core component
import Corepage from './components/Corepage'; // Import CorePage component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
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
              <HashtagPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Core Components Routes */}
        <Route 
          path="/core" 
          element={
            <ProtectedRoute>
              <Core /> {/* Route for the Core component */}
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/core/:id" 
          element={
            <ProtectedRoute>
              <Corepage /> {/* Route for viewing a specific core */}
            </ProtectedRoute>
          } 
        />

        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
