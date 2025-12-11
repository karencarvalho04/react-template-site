// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

<<<<<<< HEAD
// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyBwz41c2X-RvuIhigM05KdhMXlNLMjJ4QY",
  authDomain: "karen-site-9e8f0.firebaseapp.com",
  projectId: "karen-site-9e8f0",
  storageBucket: "karen-site-9e8f0.firebasestorage.app",
  messagingSenderId: "199721152796",
  appId: "1:199721152796:web:5160c136edb7fe4a500ad9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

=======

//add para db
import { getFirestore } from "firebase/firestore";

// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyDPhj5EdotoHpvexdr8J3SJDzalFDapgP8",
  authDomain: "ecommerce-493f2.firebaseapp.com",
  databaseURL: "https://ecommerce-493f2-default-rtdb.firebaseio.com",
  projectId: "ecommerce-493f2",
  storageBucket: "ecommerce-493f2.firebasestorage.app",
  messagingSenderId: "1054392311952",
  appId: "1:1054392311952:web:7475333ceafa5567b7f815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//para db
const db = getFirestore(app);
export { db };
>>>>>>> 7fc6445 (conexão db)
