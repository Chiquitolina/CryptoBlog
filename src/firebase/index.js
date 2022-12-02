// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx2SDxXEt6I95NauE36fpstBv2AsrmU9w",
  authDomain: "cryptoblog-e7a82.firebaseapp.com",
  projectId: "cryptoblog-e7a82",
  storageBucket: "cryptoblog-e7a82.appspot.com",
  messagingSenderId: "826694252820",
  appId: "1:826694252820:web:5d588d91966e33b3a06a01",
  measurementId: "G-NENKZGE2T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);