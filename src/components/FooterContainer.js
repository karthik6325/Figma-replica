import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftSideStyle}>
        <span>Contact Us</span>
        <span>Privacy and Cookies</span>
        <span>Trademark</span>
        <span>About Our Ads</span>
        <span>&copy; 2024 Your Company Name</span>
      </div>
      <div style={rightSideStyle}>
        <span>Current Culture: United States - English</span>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftSideStyle = {
  marginLeft: '20px',
};

const rightSideStyle = {
  marginRight: '20px',
};

export default Footer;