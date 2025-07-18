import React from "react";
import "./Banner.css";
import Logo from "../assets/img/logo-cardswap.png"; // Remplace par ton image
import BannerCards from "./BannerCards";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <div className="banner">
      <img className="logo" src={Logo} alt="Logo CardSwap" />
      <BannerCards />
      <div className="banner-button">
        <BannerButton label="Créer un compte" backgroundColor="#9c95c8" onClick={() => {}} />
        <BannerButton label="Rechercher une carte" backgroundColor="#6fa7b5" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Banner;
