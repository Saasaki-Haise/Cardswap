import React from "react";
import "./BannerButton.css";

const BannerButton = ({ label, backgroundColor, onClick }) => {
  return (
    <p
      className="custom-button"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </p>
  );
};

export default BannerButton;
