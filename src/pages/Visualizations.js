// Visualizations.js
import React from "react";
import "./Visualizations.css"; // Importez un fichier CSS pour styliser la page

const Visualizations = () => {
  // Fonction pour gérer les clics sur les liens externes
  const handleExternalLinkClick = (url) => {
    console.log(`Tentative d'ouverture de l'URL: ${url}`); // Ajout d'un log pour le débogage
    // Empêche le comportement par défaut
    const confirmation = window.confirm(
      "Ce lien vous redirigera vers un site externe. Souhaitez-vous continuer ?"
    );

    if (confirmation) {
      // Ouvrir le lien dans un nouvel onglet
      window.open(url, "_blank");
    } else {
      console.log("L'utilisateur a annulé."); // Log si l'utilisateur annule
    }
  };

  return (
    <div className="visualizations-section">
      <h2>Visualisations interactives</h2>
      <p>
        Plongez dans des visualisations en temps réel des étoiles,
        constellations et galaxies.
      </p>

      <div className="visualizations-grid">
        {/* Section Visualisation des étoiles */}
        <div className="visualization-card">
          <h3>Visualisation des étoiles</h3>
          <p>
            Explorez les positions actuelles des étoiles visibles dans le ciel.
            Manipulez les données pour observer des détails spécifiques et
            obtenir des informations sur chaque étoile.
          </p>
          <button
            className="visualization-link"
            onClick={() =>
              handleExternalLinkClick(
                "https://www.stelvision.com/astro/carte-ciel/"
              )
            }
          >
            Accéder à la carte des étoiles (Lien externe)
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/images/Laws2.png`}
            alt="Visualisation des étoiles"
            className="visualization-image"
          />
        </div>

        {/* Section Visualisation des constellations */}
        <div className="visualization-card">
          <h3>Visualisation des constellations</h3>
          <p>
            Découvrez les constellations qui peuplent le ciel nocturne. Explorez
            comment elles changent au fil des saisons et interagissez pour
            identifier les constellations visibles depuis votre région.
          </p>
          <button
            className="visualization-link"
            onClick={() =>
              handleExternalLinkClick("https://astronomes.com/carte-du-ciel/")
            }
          >
            Explorer les constellations (Lien externe)
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/images/StarsMap.png`}
            alt="Visualisation des constellations"
            className="visualization-image"
          />
        </div>

        {/* Section Visualisation des galaxies */}
        <div className="visualization-card">
          <h3>Visualisation des galaxies</h3>
          <p>
            Plongez dans l'univers des galaxies. Observez les différentes
            galaxies, leurs distances, leurs formes et leurs caractéristiques
            uniques.
          </p>
          <button
            className="visualization-link"
            onClick={() =>
              handleExternalLinkClick(
                "https://sciencepost.fr/la-carte-interactive-univers-precise-jamais-realisee/"
              )
            }
          >
            Découvrir les galaxies (Lien externe)
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/images/Tools.png`}
            alt="Visualisation des galaxies"
            className="visualization-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizations;
