// src/components/CardList.js
import React from "react";
import "../styles/CardList.css";

const reviews = [
  { id: 1, title: "Restaurante El Gourmet", description: "Una experiencia única en sabores y presentación.", rating: 4.5 },
  { id: 2, title: "Pizzería Napoli", description: "La mejor pizza napolitana fuera de Italia.", rating: 4.7 },
  { id: 3, title: "Sushi Express", description: "Fresco, delicioso y auténtico sushi japonés.", rating: 4.2 },
  // Agrega más críticas de ejemplo
];

const CardList = () => {
  return (
    <div className="card-list">
      {reviews.map((review) => (
        <div key={review.id} className="card">
          <h3>{review.title}</h3>
          <p>{review.description}</p>
          <span className="card-rating">⭐ {review.rating}</span>
        </div>
      ))}
    </div>
  );
};

export default CardList;
