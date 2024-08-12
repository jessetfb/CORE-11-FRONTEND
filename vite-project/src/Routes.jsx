
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Register from './components/registration';
import ProtectedRoute from './components/ProtectedRoute';



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
              <CreateCore /> {/* Route for the CreateCore page */}
            </ProtectedRoute>
          } 
        />
        {/* Add other protected routes here */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
