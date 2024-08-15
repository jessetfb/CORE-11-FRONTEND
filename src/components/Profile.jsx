// src/components/Profile.jsx
import React from 'react';
import user from './user';
import Admin from './admin';
import dashboard from '../Pages/dashboard';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* You can use the imported components below */}
      <user />
      <Admin />
      <dashboard />
    </div>
  );
};

export default Profile;
