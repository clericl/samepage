// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ67FXWSDq4YGO8rBA5V_sDWKY9nIIABg",
  authDomain: "samepage-c88c6.firebaseapp.com",
  projectId: "samepage-c88c6",
  storageBucket: "samepage-c88c6.appspot.com",
  messagingSenderId: "344322328809",
  appId: "1:344322328809:web:f04d84f3a7c905071b8878",
  measurementId: "G-SS16TLHB3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app
