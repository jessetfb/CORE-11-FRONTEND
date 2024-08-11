import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style.css'; // Assuming you have some styles in this file

const NavbarComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/protected', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token if available
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Unauthorized');
        navigate('/login'); // Redirect to login if unauthorized
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
        {/* Other Nav Links */}
      </Nav>
      {user && (
        <Dropdown align="end" className="profile-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img 
              src={user.profilePicture} 
              alt="Profile" 
              className="profile-picture" 
              style={{ borderRadius: '50%', width: '50px', height: '50px' }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.ItemText>
              <div className="profile-info">
                <img 
                  src={user.profilePicture} 
                  alt="Profile" 
                  className="profile-picture" 
                  style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                />
                <div className="profile-details">
                  <strong>{user.username}</strong>
                  <p>{user.email}</p>
                </div>
              </div>
            </Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
