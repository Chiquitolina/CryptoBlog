
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export {app};

