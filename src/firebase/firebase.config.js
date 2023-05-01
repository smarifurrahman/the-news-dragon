// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfK9A6KLEXyWaTAUjA8PauKZQYVh1mL2I",
    authDomain: "the-news-dragon-782e1.firebaseapp.com",
    projectId: "the-news-dragon-782e1",
    storageBucket: "the-news-dragon-782e1.appspot.com",
    messagingSenderId: "821855014762",
    appId: "1:821855014762:web:71ed05e37494872cb1df13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;