// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  appId: "SUA_APP_ID",
  // se tiver mais campos, pode manter
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");

// (Opcional) escopos extras para Microsoft, ex:
// microsoftProvider.addScope("User.Read");
