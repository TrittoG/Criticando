// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirige a la página de login
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Criticando</h2>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#top-reviews">Principales</a></li>
        <li><a href="#recent-reviews">Recientes</a></li>
        <li><a onClick={handleSignOut}>Cerrar Sesión</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
