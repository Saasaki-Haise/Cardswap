import React from "react";
import Star from "../assets/img/material-symbols_star.png";
import "./Rating.css";

const Rating = () => {
  return (
    <div className="rating">
        <img src={Star} alt="stars" />
        <img src={Star} alt="stars" />
        <img src={Star} alt="stars" />
        <img src={Star} alt="stars" />
        <img src={Star} alt="stars" />
    </div>
  );
};

export default Rating;