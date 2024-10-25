import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Importer Link de react-router-dom
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu hamburger
  const [isDropdownOpen, setDropdownOpen] = useState(false); // État pour le menu déroulant

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Bascule l'état du menu
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Bascule l'état du menu déroulant
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Ferme le menu hamburger
    setDropdownOpen(false); // Ferme le menu déroulant
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
            <RouterLink to="/News" onClick={handleLinkClick}>
              Actualités
            </RouterLink>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
              className={isDropdownOpen ? "active" : ""}
            >
              Découverte
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <RouterLink to="/stars" onClick={handleLinkClick}>
                    Étoiles
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/galaxies" onClick={handleLinkClick}>
                    Galaxies
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/laws" onClick={handleLinkClick}>
                    Lois
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <RouterLink to="/tools" onClick={handleLinkClick}>
              Outils
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/visualizations" onClick={handleLinkClick}>
              Visualiser
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
