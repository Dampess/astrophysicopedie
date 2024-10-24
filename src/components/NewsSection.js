import React, { useState } from "react";
import "./NewsSection.css"; // Assurez-vous d'avoir un fichier CSS pour les styles

const NewsSection = () => {
  const newsData = [
    {
      title: "Découverte d'une nouvelle exoplanète dans la zone habitable.",
      image: "/images/exoplanete.jpg",
      description:
        "Une équipe de scientifiques a découvert une exoplanète qui pourrait soutenir la vie. Des études supplémentaires sont nécessaires pour comprendre son atmosphère.",
      size: "normal", // Taille normale
    },
    {
      title: "La mission Mars 2024 : des révélations fascinantes à venir.",
      image: "/images/mars.jpg",
      description:
        "La mission Mars 2024 promet de révéler des informations inédites sur la surface martienne et ses possibilités d'habitabilité.",
      size: "middle", // Taille moyenne
    },
    {
      title: "Les mystères des trous noirs expliqués par les experts.",
      image: "/images/trous-noir.jpg",
      description:
        "Des astrophysiciens partagent leurs recherches récentes sur les trous noirs, révélant des aspects fascinants de ces phénomènes célestes.",
      size: "large", // Taille grande
    },
    {
      title: "Une nouvelle méthode pour détecter les ondes gravitationnelles.",
      image: "/images/gravitational-waves.jpg",
      description:
        "Une équipe de chercheurs a développé une nouvelle méthode pour détecter les ondes gravitationnelles, ouvrant la voie à de nouvelles découvertes.",
      size: "normal", // Taille normale
    },
    {
      title: "Exploration de l'intérieur de Jupiter.",
      image: "/images/jupiter.jpg",
      description:
        "Des missions spatiales récentes ont permis de recueillir des données sur l'intérieur de Jupiter, révélant des informations surprenantes.",
      size: "middle", // Taille moyenne
    },
    {
      title: "Les nouvelles avancées dans l'astrophysique quantique.",
      image: "/images/quantum-astrophysics.jpg",
      description:
        "Des scientifiques explorent les nouvelles avancées dans l'astrophysique quantique, ouvrant des horizons fascinants.",
      size: "large", // Taille grande
    },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const cardsPerPage = 4; // Nombre de cartes par page

  // Calcul de l'index des cartes à afficher
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = newsData.slice(indexOfFirstCard, indexOfLastCard);

  // Fonction pour changer de page
  const paginate = (direction) => {
    if (direction === "next" && indexOfLastCard < newsData.length) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="news-section">
      <h2>Actualités et découvertes</h2>
      <p>
        Restez informé des dernières nouvelles de l'astronomie et de la
        physique.
      </p>
      <div className="news-cards">
        {currentCards.map((news, index) => (
          <div className={`news-card ${news.size}`} key={index}>
            <img src={news.image} alt={news.title} className="news-image" />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button
          onClick={() => paginate("prev")}
          disabled={currentPage === 1}
          className="prev-btn"
        >
          Précédent
        </button>
        <button
          onClick={() => paginate("next")}
          disabled={indexOfLastCard >= newsData.length}
          className="next-btn"
        >
          Suivant
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
