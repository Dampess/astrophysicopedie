import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Importer Link de react-router-dom
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu hamburger

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Bascule l'état du menu
  };

  return (
    <header className="header">
      <h1 className="logo">
        <RouterLink to="/astrophysicopedie">AstroPhysicoPédie</RouterLink>
      </h1>

      {/* Bouton hamburger pour petits écrans */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <nav className="nav">
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <RouterLink to="/News" onClick={toggleMenu}>
              Actualités
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/stars" onClick={toggleMenu}>
              Étoiles
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/galaxies" onClick={toggleMenu}>
              Galaxies
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/laws" onClick={toggleMenu}>
              Lois
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/tools" onClick={toggleMenu}>
              Outils
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/visualizations" onClick={toggleMenu}>
              Visualiser
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
