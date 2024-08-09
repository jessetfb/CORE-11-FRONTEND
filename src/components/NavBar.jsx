import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from 'react-router-dom';

function NavBar (props) {
  const [input, setInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate('/logout');
  };

  return (
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-white shadow-md border-b border-gray-200">
      {/* Logo and Navigation Buttons */}
      <div className="flex items-center gap-6">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7QdOSPGNQ_mAQyuq8tHpTa_94ABHy32oKQ&s" 
          alt="Logo" 
          className="h-8"
        />
        <Link to="/" className="text-white font-semibold">
          <button className="flex items-center px-4 py-2 rounded-full bg-black text-white text-lg transition-transform transform hover:bg-gray-800 hover:scale-105 active:bg-gray-900 active:scale-95">
            Home
          </button>
        </Link>
        <Link to="/following" className="text-black font-semibold hover:text-gray-800">
          <button className="flex items-center px-4 py-2 rounded-full text-lg transition-transform transform hover:bg-gray-100 hover:scale-105 active:bg-gray-200 active:scale-95">
            Create
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 justify-center mx-4">
        <div className="relative max-w-[1200px] w-full bg-gray-200 rounded-full flex items-center px-4">
          <form onSubmit={onSearchSubmit} className="flex w-full items-center">
            <input 
              type="text" 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              placeholder="Search..." 
              className="bg-transparent border-none flex-1 text-lg px-4 py-2 rounded-full outline-none"
            />
            <button type="submit" className="absolute right-2 bg-transparent border-none cursor-pointer">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <IconButton>
          <Link to="/notifications">
            <NotificationIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/messages">
            <TextsmsIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/profile">
            <FaceIcon />
          </Link>
        </IconButton>
        <IconButton 
          onClick={toggleDropdown} 
          aria-expanded={isDropdownOpen} 
          aria-controls="dropdown-menu"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        {isDropdownOpen && (
          <div 
            id="dropdown-menu" 
            className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[150px] z-50"
          >
            {isLoggedIn ? (
              <div 
                onClick={handleLogout} 
                className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100"
              >
                Logout
              </div>
            ) : (
              <div 
                onClick={handleLogin} 
                className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100"
              >
                Login
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
