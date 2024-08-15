// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import user from './user'; // Import User component with capitalized name
import Admin from '../Pages/dashboard.jsx'; // Import AdminDashboard with correct name

function profile() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<user />} />
        <Route path="/dashboard" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default profile;
