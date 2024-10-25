// Tools.js
import React from "react";
import "./Tools.css";

const Tools = () => {
  const toolsData = [
    {
      title: "Carte du ciel interactive",
      description:
        "Observez la position des étoiles, constellations et planètes en temps réel, où que vous soyez.",
      image: `${process.env.PUBLIC_URL}/images/carteCiel.jpg`,
      link: "https://www.stelvision.com/astro/carte-ciel/",
    },
    {
      title: "Calculateur de phases lunaires",
      description:
        "Découvrez les phases actuelles de la Lune et les prévisions pour les jours à venir.",
      image: `${process.env.PUBLIC_URL}/images/calLunaire.jpg`,
      link: "https://fr.planetcalc.com/524/",
    },
    {
      title: "Éphémérides",
      description:
        "Consultez les éphémérides pour suivre les événements astronomiques à venir : éclipses, transits et plus encore.",
      image: `${process.env.PUBLIC_URL}/images/ephemeride.jpg`,
      link: "https://www.ephemeride.com/",
    },
    {
      title: "Télescope virtuel",
      description:
        "Utilisez notre télescope virtuel pour observer des objets lointains tels que des galaxies et des nébuleuses.",
      image: `${process.env.PUBLIC_URL}/images/virtualTelescope.jpg`,
      link: "https://www.esa.int/",
    },
  ];

  // Fonction pour gérer les clics sur les liens externes
  const handleExternalLinkClick = (url) => {
    const confirmation = window.confirm(
      "Ce lien vous redirigera vers un site externe. Souhaitez-vous continuer ?"
    );

    if (confirmation) {
      // Ouvrir le lien dans un nouvel onglet
      window.open(url, "_blank");
    }
  };

  return (
    <div className="tools-section">
      <h2>Outils d'observation et d'étude du ciel</h2>
      <p>
        Accédez à une gamme d'outils interactifs pour explorer et mieux
        comprendre l'univers qui vous entoure.
      </p>

      <div className="tools-grid">
        {toolsData.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.image} alt={tool.title} className="tool-icon" />
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <button
              className="tool-link"
              onClick={() => handleExternalLinkClick(tool.link)}
            >
              En savoir plus (Lien externe)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
