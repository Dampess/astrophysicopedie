// Visualizations.js
import React from "react";
import "./Visualizations.css"; // Importez un fichier CSS pour styliser la page

const Visualizations = () => {
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
          <a href="/tools/sky-map" className="visualization-link">
            Accéder à la carte des étoiles
          </a>
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
          <a href="/tools/constellations-map" className="visualization-link">
            Explorer les constellations
          </a>
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
          <a href="/tools/galaxies-map" className="visualization-link">
            Découvrir les galaxies
          </a>
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
