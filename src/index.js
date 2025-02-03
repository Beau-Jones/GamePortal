import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


// Create the root element and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
