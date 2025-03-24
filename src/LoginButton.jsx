// LoginButton.js
import React from 'react';

function LoginButton() {
  const handleLogin = () => {
    // This will redirect to the backend to handle Steam login
    window.location.href = 'http://localhost:3001/auth/steam';
  };

  return (
    <button onClick={handleLogin}>Login with Steam</button>
  );
}

export default LoginButton;