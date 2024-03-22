import React from "react";
import "../../sass/layout/_header.scss";

function Header() {
  return (
    <header className="header__global">
      <nav className="header">
        <div className="logo-container">
          <img src="/sportsee-logo.png" alt="sportsee logo" />
        </div>
        <a href="/" className="header__accueil">
          Accueil
        </a>
        <a href="/" className="header__profil">
          Profil
        </a>
        <a href="/" className="header__reglage">
          Réglage
        </a>
        <a href="/" className="header__communaute">
          Communauté
        </a>
      </nav>
    </header>
  );
}

export default Header;
