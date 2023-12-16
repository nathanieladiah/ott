import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD33AM3VZIt5IMZc0JXha8e0HJH0mvgNS0",
  authDomain: "ourtimetogether-410ec.firebaseapp.com",
  projectId: "ourtimetogether-410ec",
  storageBucket: "ourtimetogether-410ec.appspot.com",
  messagingSenderId: "656046185905",
  appId: "1:656046185905:web:71b90e6fe582f2fd29b190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
