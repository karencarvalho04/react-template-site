// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";


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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//add para db
import { getFirestore } from "firebase/firestore";

//para db
const db = getFirestore(app);
export { db };
