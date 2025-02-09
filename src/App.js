import React, { useState } from 'react';
import './App.css'; // Ensure any global styles or font imports are here

function App() {
  const [message, setMessage] = useState('');
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: '50%',
    left: '60%',
  });

  const handleYesClick = () => {
    setMessage("Thank you for being my valentines!!! I love you so much! ❤ ");
  };

  const handleNoMouseEnter = (e) => {
    const button = e.target;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate the viewport dimensions minus the button size
    const containerWidth = window.innerWidth - buttonWidth;
    const containerHeight = window.innerHeight - buttonHeight;

    // Generate random positions
    const randomLeft = Math.random() * containerWidth;
    const randomTop = Math.random() * containerHeight;

    setNoButtonPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  // Container styling with a clean, solid border
  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    border: '8px solid #ff3366', // Simple solid border
    borderRadius: '20px',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  // Heading styling with a cursive font and subtle text shadow
  const headingStyle = {
    fontSize: '3rem',
    color: '#ff3366',
    fontFamily: "'Dancing Script', cursive",
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    margin: '10px 0',
  };

  // "Yes" button styling (fixed at the bottom center)
  const yesButtonStyle = {
    position: 'absolute',
    bottom: '300px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    fontSize: '1.5rem',
    background: 'linear-gradient(145deg, #ff99cc, #ff66b2)',
    border: '2px solid #ff3366',
    borderRadius: '50px',
    cursor: 'pointer',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  // "No" button styling (it jumps around the viewport)
  const noButtonStyle = {
    position: 'absolute',
    top: noButtonPosition.top,
    left: noButtonPosition.left,
    padding: '10px 20px',
    fontSize: '1.5rem',
    background: 'linear-gradient(145deg, #ff99cc, #ff66b2)',
    border: '2px solid #ff3366',
    borderRadius: '50px',
    cursor: 'pointer',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'top 0.3s ease, left 0.3s ease',
  };

  // Message styling for when "Yes" is clicked
  const messageStyle = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '2rem',
    color: '#ff3366',
    fontFamily: "'Dancing Script', cursive",
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My beautiful Jaan,</h1>
      <h1 style={headingStyle}>क्या तुम मेरी वैलेंटाइन बनोगी?</h1>

      <button onClick={handleYesClick} style={yesButtonStyle}>
        ❤️ Yes ❤️
      </button>

      <button onMouseEnter={handleNoMouseEnter} style={noButtonStyle}>
        💔 No 💔
      </button>

      {message && <h2 style={messageStyle}>{message}</h2>}
    </div>
  );
}

export default App;
