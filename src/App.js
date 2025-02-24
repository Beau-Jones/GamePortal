// Importing necessary dependencies
import React, {useState} from 'react';
// Import other components, like Navbar, Footer, etc.
import CustomNavbar from './CustomNavbar';
// import Footer from './Footer';
import PostCard from './PostCard.jsx';
import SideBar from './SideBar.jsx';
import WritePost from './WritePost.jsx';
import initialData from './data/reviews.js';
import MainContentTitle from './MainContentTitle.jsx';
import './Body.css';
import './PostCard.css';
import './CustomNavbar.css';


// Define the main App component
function App() {
  const [reviews, setReviews] = useState(initialData);

  const handleNewData = (newData) => {
    // Update the reviews when a new post is added.
    setReviews(newData); 
  };

  return (
    <div className="App" style={{ backgroundColor: 'rgba(43, 48, 53, 1)', minHeight: '100vh'}}>
      {/* Navbar component */}
      <CustomNavbar />

      <SideBar />

      {/* Main content of the app */}
      {/* <main>
        <h1>Welcome to My React App!</h1>
        <p>This is a basic layout example.</p>
      </main> */}
      <WritePost reviews={reviews} onDataUpdate={handleNewData}/>
      <MainContentTitle />
      {reviews.map((person, index) =>
      <PostCard bg='success' key={index} friend={person.friend} game={person.game} text={person.text}/>
      )}

      {/* Footer component */}
    </div>
  );
}

export default App;  // Export the App component to use in other files
