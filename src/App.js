import React from 'react';

function App() {
  const appStyle = {
    backgroundColor: '#000', // black background
    color: '#fff', // white text
    height: '100vh', // full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const companyStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const comingSoonStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    letterSpacing: '2px',
  };

  return (
    <div style={appStyle}>
      <div style={companyStyle}>IGen Pro Technologies</div>
      <div style={comingSoonStyle}>Coming Soon...</div>
    </div>
  );
}

export default App;
