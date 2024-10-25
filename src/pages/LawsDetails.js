import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./LawDetails.css";

const LawDetails = () => {
  const location = useLocation();
  const { title, description } = location.state || {};

  // Vérifier si la loi existe
  if (!title) {
    return <div className="no-law">Aucune loi sélectionnée</div>;
  }

  return (
    <div className="law-details">
      <header className="law-header">
        <h1>{title}</h1>
      </header>
      <section className="law-content">
        <p>{description}</p>
      </section>
      <footer className="law-footer">
        <Link to="/laws" className="back-link">
          ← Retour à la liste des lois
        </Link>
      </footer>
    </div>
  );
};

export default LawDetails;
