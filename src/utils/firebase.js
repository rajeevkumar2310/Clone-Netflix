// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-main-392be.firebaseapp.com",
  projectId: "netflix-gpt-main-392be",
  storageBucket: "netflix-gpt-main-392be.appspot.com",
  messagingSenderId: "88798320413",
  appId: "1:88798320413:web:97009d48c0dd931647f3f4",
  measurementId: "G-2WJCHEB2WW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
