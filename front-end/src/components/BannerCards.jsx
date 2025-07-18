import React from "react";
import "./BannerCards.css";
import logoCollectionne from "../assets/img/logo_collectionne.png";
import logoEchange from "../assets/img/logo_echange.png";
import logoPartage from "../assets/img/logo_partage.png";



const BannerCards = () => {
  return (
    <div className="bannerCards">
        <div className="card">
            <img className="collectionne" src={logoCollectionne} alt="Logo Collectionne" />
            <h3>Collectionne</h3>
            <p>Organise et montre ta collection de cartes TCG uniques.</p>
        </div>
        <div className="card card-echange">
            <img className="echange" src={logoEchange} alt="Logo Echange" />
            <h3 className="title-card">Échange</h3>
            <p>Échange tes cartes facilement avec d'autres membres.</p>
        </div>
        <div className="card">
            <img className="partage" src={logoPartage} alt="Logo Partage" />
            <h3 className="title-card">Partage</h3>
            <p>Discute et connecte-toi avec d’autres passionnés de TCG.</p>
        </div>
    </div>
  );
};

export default BannerCards;