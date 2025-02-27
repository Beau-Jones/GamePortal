import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuring firebase

const firebaseConfig = {
    apiKey: "AIzaSyBQRc_iLDzIYFHxdnUdDnKrwXwXSxwuSbw",
    authDomain: "gameportal-5c465.firebaseapp.com",
    projectId: "gameportal-5c465",
    storageBucket: "gameportal-5c465.firebasestorage.app",
    messagingSenderId: "591575595119",
    appId: "1:591575595119:web:0dd4fcdf51f1b0897ab59a",
    measurementId: "G-VFE0XVB1LP"
  };

  // Firestore functions
export async function addPost(post) {
    try {
        await addDoc(collection(db, "posts"), post);
        console.log("Post added successfully!");
    } catch (error) {
        console.error("Error adding post:", error);
    }
}

export async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    return querySnapshot.docs.map(doc => doc.data());
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);