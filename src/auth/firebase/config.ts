// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzp52QjoBqj5OAVXfaBv69YsUTkSC2iT0",
  authDomain: "greenagain-a5a2d.firebaseapp.com",
  projectId: "greenagain-a5a2d",
  storageBucket: "greenagain-a5a2d.appspot.com",
  messagingSenderId: "176673705327",
  appId: "1:176673705327:web:f08b147f6a6602f8866c9a",
  measurementId: "G-DGRX9SF2QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(app);
//const analytics = getAnalytics(app);

export {app, FIREBASE_AUTH };