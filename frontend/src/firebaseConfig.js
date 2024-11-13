// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlgrI_SVQo6cEX9yKycS3keQCsShR-AEg",
  authDomain: "criticando-7d4a4.firebaseapp.com",
  projectId: "criticando-7d4a4",
  storageBucket: "criticando-7d4a4.firebasestorage.app",
  messagingSenderId: "965987470754",
  appId: "1:965987470754:web:8a6470b6cdad5c61ee76fb",
  measurementId: "G-TGNECJ9F8Q"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la autenticación y el proveedor de Google
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
