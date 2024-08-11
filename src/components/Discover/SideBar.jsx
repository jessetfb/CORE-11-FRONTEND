import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data for sidebar
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/sidebar'); // Replace with your API endpoint
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-1/4 bg-white p-4">
      <div className="h-32 w-32 rounded-full mx-auto overflow-hidden">
        <img 
          src={user?.profilePicture || 'default-profile-picture-url'} // Replace with default URL
          alt="Profile" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{user?.name || 'N/A'}</h2>
        <p className="text-gray-600">{user?.role || 'N/A'}</p>
        <p className="mt-2">{user?.followingCount || '0'} following</p>
        <div className="flex justify-center mt-4 space-x-2">
          <button 
            className="bg-black text-white px-4 py-2 rounded-lg" 
            onClick={() => handleNavigation('/share')}
          >
            share
          </button>
          <button 
            className="bg-black text-white px-4 py-2 rounded-lg" 
            onClick={() => handleNavigation('/edit-profile')}
          >
            Edit profile
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;