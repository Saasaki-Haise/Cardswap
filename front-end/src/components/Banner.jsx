import React from "react";
import "./Banner.css";
import bannerImage from "../assets/img/banner.png"; // Remplace par ton image
import BannerCards from "./BannerCards";

const Banner = () => {
  return (
    <div className="banner">
      <BannerCards />
    </div>
  );
};

export default Banner;
