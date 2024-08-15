import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import user from './user';
import Admin from './admin';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [dashboardComponent, setDashboardComponent] = useState(null);

  useEffect(() => {
    if (user) {
      const component = user.isAdmin ? <Admin user={user} /> : <user user={user} />;
      setDashboardComponent(component);
    } else {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {dashboardComponent}
    </div>
  );
};

export default Profile;
