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
  apiKey: "AIzaSyDgPE07H0KT8JjHXFgFpZ_cYXsCtVtedbc",
  authDomain: "nf-clone-82c7c.firebaseapp.com",
  projectId: "nf-clone-82c7c",
  storageBucket: "nf-clone-82c7c.appspot.com",
  messagingSenderId: "598063836309",
  appId: "1:598063836309:web:f9d7cfbf381ac6acd87f9c",
  measurementId: "G-V0DXBN25K8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
