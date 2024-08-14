// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import user from './components/user'; // Import User component with capitalized name
import AdminDashboard from './Pages/AdminDashboard'; // Import AdminDashboard with correct name

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<user />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
