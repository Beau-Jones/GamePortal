// Importing necessary dependencies
import React, { useState, useEffect } from 'react';
import { db } from './firebase';  // Import Firestore instance
import { collection, onSnapshot } from 'firebase/firestore';

// Import other components, like Navbar, Footer, etc.
import CustomNavbar from './CustomNavbar';
// import Footer from './Footer';
import PostCard from './PostCard.jsx';
import SideBar from './SideBar.jsx';
import WritePost from './WritePost.jsx';
import MainContentTitle from './MainContentTitle.jsx';
import './Body.css';
import './PostCard.css';
import './CustomNavbar.css';


// Define the main App component
function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // onSnapshot is a real time firestore listener, so when the database is updated, a new snapshot is made.
    // db is my database in firestore, the name is such because it's defined and imported in the firestore.js app.
    // doc is a post. doc.id gives each doc a unique id. doc.data() actually retrieves the data.
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postsArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(postsArray);
    });
  
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);


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
      <WritePost />
      <MainContentTitle />
      {reviews.map((person, index) =>
      <PostCard bg='success' key={index} friend={person.friend} game={person.game} text={person.text}/>
      )}

      {/* Footer component */}
    </div>
  );
}

export default App;  // Export the App component to use in other files
