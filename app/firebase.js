// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQya0IhUCVlkqf-FPrBGPI-qmw1P5JIVw",
  authDomain: "expense-tracer-e4b74.firebaseapp.com",
  projectId: "expense-tracer-e4b74",
  storageBucket: "expense-tracer-e4b74.appspot.com",
  messagingSenderId: "298526415149",
  appId: "1:298526415149:web:811445e61f28c4da60dba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);