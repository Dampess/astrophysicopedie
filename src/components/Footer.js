import React from "react";
import "./Footer.css"; // N'oubliez pas d'ajouter le fichier CSS pour le footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 AstroPhysicoPédie. Tous droits réservés.</p>
      <p>
        Suivez-nous sur les réseaux sociaux :
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          {" "}
          Twitter{" "}
        </a>{" "}
        |
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Facebook{" "}
        </a>{" "}
        |
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Instagram{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
