// Header.js
import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Importer Link de react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <RouterLink to="/astrophysicopedie">AstroPhysicoPédie</RouterLink>{" "}
      </h1>
      <nav className="nav">
        <ul>
          <li>
            <RouterLink to="/News">Actualités</RouterLink>{" "}
          </li>
          <li>
            <RouterLink to="/stars">Étoiles</RouterLink>{" "}
            {/* Lien vers la page des étoiles */}
          </li>
          <li>
            <RouterLink to="/galaxies">Galaxies</RouterLink>{" "}
            {/* Lien vers la page des galaxies */}
          </li>
          <li>
            <RouterLink to="/laws">Lois</RouterLink>{" "}
            {/* Lien vers la page des lois */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
