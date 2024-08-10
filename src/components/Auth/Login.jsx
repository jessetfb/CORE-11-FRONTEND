import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5000/auth/login', { // Update URL as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access_token); // Save token in local storage
        onLogin(data.user); // Pass the user data to the parent component or handle it as needed
        navigate('/Home'); // Redirect to the updated home page URL
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during login');
    }
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    height: '40px',
    width: '300px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    padding: '0 1rem',
    fontSize: '16px',
    marginBottom: '10px',
    outline: 'none',
  };

  const submitButtonStyle = {
    height: '40px',
    width: '300px',
    backgroundColor: '#1b8c1b',
    border: 'none',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const registerButtonStyle = {
    height: '40px',
    width: '300px',
    backgroundColor: '#1b8c1b',
    border: 'none',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
    textAlign: 'center',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2>Login</h2>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" style={inputStyle} placeholder="Username" required />
          <br />
          <input type="password" name="password" style={inputStyle} placeholder="Password" required />
          <br />
          <input type="submit" style={submitButtonStyle} value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
