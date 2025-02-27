import React from 'react';

function Footer() {
  const mainStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  };

  const paragraphStyle = {
    color: '#333',
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return (
    <footer style={mainStyle}>
      <p style={paragraphStyle}>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;