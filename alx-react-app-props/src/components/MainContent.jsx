import React from 'react';

function MainContent() {
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
    <main style={mainStyle}>
      <p style={paragraphStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;