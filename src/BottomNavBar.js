import React from 'react';
import { Link } from 'react-router-dom'; // To handle navigation

// Styles for the nav bar
const navStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#333', // Adjust color to your design
  padding: '10px 0',
};

const linkStyle = {
  color: 'white', // Adjust color
  textDecoration: 'none',
  fontSize: '18px',
};

function BottomNavBar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/friends" style={linkStyle}>Friends</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/loading" style={linkStyle}>Loading</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
    </nav>
  );
}

export default BottomNavBar;
