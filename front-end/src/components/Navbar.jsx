import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../assets/img/home.png";
import PlusLogo from "../assets/img/plus.png";
import SearchLogo from "../assets/img/search.png";
import MessageLogo from "../assets/img/message.png";
import ProfilLogo from "../assets/img/profil.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="bar">
          <Link to={"/"}>
            <img src={HomeLogo} alt="Home" />
          </Link>
            <img className="search" src={SearchLogo} alt="Search" />
            <img className="plus" src={PlusLogo} alt="Plus" />
            <img className="message" src={MessageLogo} alt="Message" />
          <Link to={"/profile"}>
            <img src={ProfilLogo} alt="Profile" />
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
