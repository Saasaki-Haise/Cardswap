import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Banner />
      <h1>Bienvenue sur CardSwap !</h1>
      <p><Link to="/register">S'inscrire</Link> ou <Link to="/login">Se connecter</Link></p>
    </div>
  );
}

export default Home;
