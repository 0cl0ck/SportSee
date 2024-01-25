import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <header className="header__global">
      <nav className="navbar">
        <div className="logo-container">
          <img src="sportsee-logo.png" alt="sportsee logo" />
        </div>
        <a href="/" className="navbar__accueil">
          Accueil
        </a>
        <a href="/" className="navbar__profil">
          Profil
        </a>
        <a href="/" className="navbar__reglage">
          Réglage
        </a>
        <a href="/" className="navbar__communaute">
          Communauté
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
