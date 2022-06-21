// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIOsYHYlv0L5JH3wzBasHP7PaFHVeed_E",
  authDomain: "house-marketplace-app-2022-07.firebaseapp.com",
  projectId: "house-marketplace-app-2022-07",
  storageBucket: "house-marketplace-app-2022-07.appspot.com",
  messagingSenderId: "375579018803",
  appId: "1:375579018803:web:c6caeb963a1c5151de4546",
  measurementId: "G-3G1C3K7N1J"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics();
export const db = getFirestore();