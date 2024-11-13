// src/Login.js
import React, { useState } from "react";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate("/home"); // Redirigir a la página de inicio
      })
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Error al cerrar sesión:", error));
  };

  return (
    <div className="login-container">
      <h1 className="header-title">Criticando</h1>
      {user ? (
        <div className="user-info">
          <h2>Bienvenido, {user.displayName}</h2>
          <img src={user.photoURL} alt="Profile" />
          <button className="logout-button" onClick={handleSignOut}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button className="login-button" onClick={signInWithGoogle}>
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
};

export default Login;
