// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-lo-b3815.firebaseapp.com",
  projectId: "blog-lo-b3815",
  storageBucket: "blog-lo-b3815.appspot.com",
  messagingSenderId: "292169704570",
  appId: "1:292169704570:web:dba3ec922c3c0c1e2807c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
