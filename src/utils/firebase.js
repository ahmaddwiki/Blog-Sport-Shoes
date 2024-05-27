// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloglandsport.firebaseapp.com",
  projectId: "bloglandsport",
  storageBucket: "bloglandsport.appspot.com",
  messagingSenderId: "713231461130",
  appId: "1:713231461130:web:af785ba78ef508221228f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);