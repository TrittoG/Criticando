// src/Home.js
import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="home-title">Críticas Recientes</h1>
      <CardList />
    </div>
  );
};

export default Home;
