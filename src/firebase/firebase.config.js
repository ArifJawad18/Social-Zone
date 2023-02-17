// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoUCZuTb_Pxcsvk5MfFr9Hrm9kty3lmlo",
  authDomain: "social-box-aacfd.firebaseapp.com",
  projectId: "social-box-aacfd",
  storageBucket: "social-box-aacfd.appspot.com",
  messagingSenderId: "330459596705",
  appId: "1:330459596705:web:89c37023b484b29dbfede0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;