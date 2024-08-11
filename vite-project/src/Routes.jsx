import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import CorePage from './components/CorePage';
import LandingPage from './Pages/LandingPage';
import Register from './components/registration';
import ProtectedRoute from './components/ProtectedRoute';
import HashtagPage from './components/HashtagPage'; // Import the HashtagPage component
import HashtagsSection from './components/HashtagsSection'; // Import the HashtagsSection component

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
              <HashtagsSection /> {/* Add the HashtagsSection component */}
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/core/:id" 
          element={
            <ProtectedRoute>
              <CorePage />
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
        {/* Add other protected routes here */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
