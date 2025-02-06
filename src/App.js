// Importing necessary dependencies
import React from 'react';
// Import other components, like Navbar, Footer, etc.
import CustomNavbar from './CustomNavbar';
// import Footer from './Footer';
import PostCard from './PostCard.jsx';
import reviews from './data/reviews.js';
import './PostCard.css';

// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <CustomNavbar />

      {/* Main content of the app */}
      {/* <main>
        <h1>Welcome to My React App!</h1>
        <p>This is a basic layout example.</p>
      </main> */}
      {reviews.map((person, index) =>
      <PostCard bg='success' key={index} friend={person.friend} game={person.game} text={person.text}/>
      )}

      {/* Footer component */}
    </div>
  );
}

export default App;  // Export the App component to use in other files
