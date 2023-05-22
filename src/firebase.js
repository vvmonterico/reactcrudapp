// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrYV2twHamjvRp5tt7bsl33eGaMqucP1M",
  authDomain: "react-crud-app-f9da4.firebaseapp.com",
  projectId: "react-crud-app-f9da4",
  storageBucket: "react-crud-app-f9da4.appspot.com",
  messagingSenderId: "849259307560",
  appId: "1:849259307560:web:cf5bae5ef433db9ee08b1d",
  measurementId: "G-G69JREK7Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);