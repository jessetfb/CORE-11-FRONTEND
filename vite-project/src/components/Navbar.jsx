import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = ({ isLoggedIn, user }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchInput.value;
    console.log('Searching for:', query);
    // Implement search logic
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      const redirectTo = user.isAdmin ? '/admin-dashboard' : '/user-dashboard';
      navigate(redirectTo);
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="https://cdna.artstation.com/p/assets/images/images/056/038/296/large/solo-art-god-serban9-letter-c-logo-design-with-watrfall-8k-octane-render-53caf5e6-0302-44e6-99e5-9260af5c4531.jpg?1668330079" 
          alt="Logo" 
          className="w-12 h-12 rounded-full shadow-md transform transition-transform hover:scale-105"
        />
        <div className="ml-6 space-x-8">
          <button 
            onClick={() => navigate('/')} 
            className="text-gray-800 font-semibold hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/create-core')} 
            className="text-gray-800 font-semibold hover:text-blue-500 transition-colors duration-300"
          >
            Create
          </button>
        </div>
      </div>

      <form className="relative flex-1 mx-6" onSubmit={handleSearch}>
        <input 
          type="text" 
          name="searchInput" 
          placeholder="Search" 
          className="w-full px-5 py-3 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ease-in-out"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className="flex items-center space-x-6">
        <button 
          onClick={() => setShowNotifications(true)} 
          className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faBell} />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
            3
          </span>
        </button>
        <button 
          onClick={() => setShowMessages(true)} 
          className="relative text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
            5
          </span>
        </button>
        {isLoggedIn ? (
          <div className="relative">
            <button 
              onClick={handleProfileClick} 
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full shadow-md transform transition-transform hover:scale-105"
                />
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
            </button>
          </div>
        ) : (
          <button 
            onClick={handleLogin} 
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUser} /> Login
          </button>
        )}
      </div>

      {/* Notifications Modal */}
      {showNotifications && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
            <p className="mt-4 text-gray-600">Here are your notifications.</p>
            <button 
              onClick={() => setShowNotifications(false)} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Messages Modal */}
      {showMessages && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            <p className="mt-4 text-gray-600">Here are your messages.</p>
            <button 
              onClick={() => setShowMessages(false)} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
