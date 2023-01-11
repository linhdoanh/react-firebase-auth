// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4B9n7wKoazcnaf-wZt17fjoWEcfOWAjw",
  authDomain: "auth-81e21.firebaseapp.com",
  projectId: "auth-81e21",
  storageBucket: "auth-81e21.appspot.com",
  messagingSenderId: "210604809515",
  appId: "1:210604809515:web:e84628d7edecaf458a396e",
  measurementId: "G-902TP2W6K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
