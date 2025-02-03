// Importing necessary dependencies
import React from 'react';
// Import other components, like Navbar, Footer, etc.
import CustomNavbar from './CustomNavbar';
// import Footer from './Footer';

// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <CustomNavbar />

      {/* Main content of the app */}
      <main>
        <h1>Welcome to My React App!</h1>
        <p>This is a basic layout example.</p>
      </main>

      {/* Footer component */}
    </div>
  );
}

export default App;  // Export the App component to use in other files
