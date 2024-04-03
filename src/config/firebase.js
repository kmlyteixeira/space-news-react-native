// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvCmG5qC-KK3RELW_2QdyDFxBp1WHsN_A",
  authDomain: "space-noticies.firebaseapp.com",
  projectId: "space-noticies",
  storageBucket: "space-noticies.appspot.com",
  messagingSenderId: "766874352163",
  appId: "1:766874352163:web:82cbcee803a790d8c58f96",
  measurementId: "G-ES891F969Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
