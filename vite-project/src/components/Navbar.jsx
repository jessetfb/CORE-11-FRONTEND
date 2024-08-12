import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import '../style.css';

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

  const handleLogout = () => {
    // Clear user data and token
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Navbar.Brand href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
        <img src="https://cdna.artstation.com/p/assets/images/images/056/038/296/large/solo-art-god-serban9-letter-c-logo-design-with-watrfall-8k-octane-render-53caf5e6-0302-44e6-99e5-9260af5c4531.jpg?1668330079" alt="Logo" width="120" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</Nav.Link>
          <Nav.Link href="/create-core" onClick={(e) => { e.preventDefault(); navigate('/create-core'); }}>Create</Nav.Link>
        </Nav>
        <Form inline className="ml-auto search-form" onSubmit={handleSearch}>
          <FormControl
            type="text"
            name="searchInput"
            placeholder="Search"
            className="search-input"
          />
          <Button variant="outline-success" className="search-button" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
        <Button variant="outline-primary" className="mx-2" onClick={() => setShowNotifications(true)}>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Button variant="outline-primary" className="mx-2" onClick={() => setShowMessages(true)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </Button>
        {isLoggedIn ? (
          <NavDropdown 
            title={user.profilePicture ? 
              <img src={user.profilePicture} alt="Profile" width="30" height="30" className="rounded-circle"/> 
              : <FontAwesomeIcon icon={faUser} />} 
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={handleProfileClick}>
              {user.isAdmin ? 'Admin Dashboard' : 'User Dashboard'}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.ItemText>
              <img src={user.profilePicture} alt="Profile" width="50" height="50" className="rounded-circle" />
              <div>{user.username}</div>
              <div>{user.email}</div>
            </NavDropdown.ItemText>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Button variant="outline-primary" onClick={handleLogin}>
            <FontAwesomeIcon icon={faUser} /> Login
          </Button>
        )}
      </Navbar.Collapse>

      {/* Notifications Modal */}
      <Modal show={showNotifications} onHide={() => setShowNotifications(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here are your notifications.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowNotifications(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Messages Modal */}
      <Modal show={showMessages} onHide={() => setShowMessages(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here are your messages.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMessages(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavbarComponent;
