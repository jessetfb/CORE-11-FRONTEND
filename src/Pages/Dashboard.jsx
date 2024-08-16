import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/Navbar';
import UserProfile from '../components/user'; // Import UserProfile from the components folder
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Check if user is logged in based on token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Optionally, fetch user data
      // setUser(fetchedUserData);
    } else {
      setIsLoggedIn(false);
      setUser({});
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <NavbarComponent isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      <UserProfile /> {/* Add UserProfile component */}
      {/* Add other components or layout elements as needed */}
    </div>
  );
};

export default Dashboard;