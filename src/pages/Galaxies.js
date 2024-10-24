import React, { useState } from "react";
import "./Galaxies.css"; // Créez ce fichier CSS pour les styles

const Galaxies = () => {
  const galaxiesData = [
    {
      name: "La Voie Lactée",
      image: "/images/milky-way.jpg",
      description:
        "Notre galaxie, la Voie Lactée, est une spirale barrée qui abrite notre système solaire. Elle compte plus de 200 milliards d'étoiles et mesure environ 100 000 années-lumière de diamètre.",
    },
    {
      name: "Galaxie d'Andromède",
      image: "/images/andromeda.jpg",
      description:
        "Située à environ 2,537 millions d'années-lumière, Andromède est la plus grande galaxie proche de la Voie Lactée. Elle est sur une trajectoire de collision avec notre galaxie d'ici plusieurs milliards d'années.",
    },
    {
      name: "Galaxies Naines",
      image: "/images/dwarf-galaxy.jpg",
      description:
        "Les galaxies naines, beaucoup plus petites que les galaxies spirales, contiennent entre quelques centaines de millions et plusieurs milliards d'étoiles. Elles sont souvent influencées par des galaxies plus grandes comme la Voie Lactée.",
    },
    {
      name: "Galaxie du Sombrero",
      image: "/images/sombrero-galaxy.jpg",
      description:
        "Cette galaxie spirale se distingue par son apparence particulière, avec un bulbe central très lumineux et un disque de poussière très épais qui la fait ressembler à un chapeau de sombrero.",
    },
    {
      name: "Galaxies Irrégulières",
      image: "/images/irregular-galaxy.jpg",
      description:
        "Les galaxies irrégulières ne rentrent dans aucune des catégories habituelles. Elles peuvent résulter de la fusion ou de la perturbation gravitationnelle par d'autres galaxies.",
    },
    {
      name: "Galaxie d'Eschelle",
      image: "/images/whirlpool-galaxy.jpg",
      description:
        "La Galaxie d'Eschelle est une galaxie spirale située à environ 23 millions d'années-lumière de la Terre, célèbre pour sa structure en spirale bien définie.",
    },
    {
      name: "Galaxie de Triangulum",
      image: "/images/triangulum-galaxy.jpg",
      description:
        "Également connue sous le nom de M33, la Galaxie de Triangulum est une galaxie spirale qui fait partie du Groupe Local, à environ 3 millions d'années-lumière de la Terre.",
    },
    {
      name: "Galaxie de la Pinne",
      image: "/images/pinwheel-galaxy.jpg",
      description:
        "La Galaxie de la Pinne est une galaxie spirale située dans la constellation des Chevaliers. Sa structure en spirale est particulièrement belle à observer.",
    },
    {
      name: "Galaxie de Centaurus A",
      image: "/images/centaurus-a.jpg",
      description:
        "Centaurus A est une galaxie elliptique massive, connue pour son activité galactique centrale, et est l'une des galaxies les plus proches de la Terre.",
    },
    {
      name: "Galaxie de Sombrero",
      image: "/images/sombrero-galaxy.jpg",
      description:
        "Cette galaxie spirale a une forme caractéristique avec un bulbe lumineux entouré d'un disque de poussière. Elle est bien connue des astronomes.",
    },
    {
      name: "Galaxie du Tourbillon",
      image: "/images/whirlpool-galaxy.jpg",
      description:
        "La Galaxie du Tourbillon est une galaxie spirale située dans la constellation des Chiens de Chasse. Elle est célèbre pour sa belle structure spirale.",
    },
    {
      name: "Galaxie d'Hercule",
      image: "/images/hercules-galaxy.jpg",
      description:
        "La Galaxie d'Hercule est une galaxie spirale située dans la constellation d'Hercule. Elle est souvent étudiée pour son noyau actif.",
    },
    {
      name: "Galaxie de Bode",
      image: "/images/bode-galaxy.jpg",
      description:
        "La Galaxie de Bode est une galaxie spirale située dans la constellation des Chiens de Chasse, souvent observée pour ses caractéristiques de spirale.",
    },
    {
      name: "Galaxie de la Roue de Chariot",
      image: "/images/cartwheel-galaxy.jpg",
      description:
        "Cette galaxie est un exemple classique de galaxie collisante, avec une structure en anneau résultant d'une collision entre deux galaxies.",
    },
    {
      name: "Galaxie de l'Antenne",
      image: "/images/antennae-galaxies.jpg",
      description:
        "Les Galaxies de l'Antennes sont deux galaxies en interaction qui forment une belle structure en forme d'antenne en raison de leur collision.",
    },
    {
      name: "Galaxie de la Tête de Cheval",
      image: "/images/horsehead-galaxy.jpg",
      description:
        "Cette galaxie est souvent associée à la nébuleuse de la Tête de Cheval, une région de formation d'étoiles située dans la constellation d'Orion.",
    },
    {
      name: "Galaxie de la Flamme",
      image: "/images/flame-galaxy.jpg",
      description:
        "Cette galaxie est célèbre pour sa couleur rougeoyante et sa région de formation d'étoiles active. Elle est visible dans la constellation d'Orion.",
    },
    {
      name: "Galaxie d'Aldébaran",
      image: "/images/aldebaran-galaxy.jpg",
      description:
        "La Galaxie d'Aldébaran est une galaxie spirale barrée située à une distance d'environ 60 millions d'années-lumière de la Terre.",
    },
    {
      name: "Galaxie de Léo I",
      image: "/images/leo-i-galaxy.jpg",
      description:
        "La Galaxie de Léo I est une galaxie naine sphérique et fait partie du Groupe Local, connue pour sa faible luminosité.",
    },
    {
      name: "Galaxie de Léo II",
      image: "/images/leo-ii-galaxy.jpg",
      description:
        "La Galaxie de Léo II est une autre galaxie naine sphérique, située également dans la constellation du Lion, et elle est très peu lumineuse.",
    },
    {
      name: "Galaxie de l'Horloge",
      image: "/images/clock-galaxy.jpg",
      description:
        "La Galaxie de l'Horloge est connue pour sa forme unique et son activité de formation d'étoiles. Elle est souvent observée par les astronomes.",
    },
    {
      name: "Galaxie du Cône",
      image: "/images/cone-galaxy.jpg",
      description:
        "La Galaxie du Cône est une galaxie spirale située dans la constellation du Cône. Elle est connue pour sa structure spirale unique.",
    },
    {
      name: "Galaxie du Pacificateur",
      image: "/images/pacifier-galaxy.jpg",
      description:
        "Cette galaxie est souvent observée pour sa luminosité et son activité de formation d'étoiles. Elle est située dans le Groupe Local.",
    },
    {
      name: "Galaxie du Porte-Gobelet",
      image: "/images/cup-galaxy.jpg",
      description:
        "La Galaxie du Porte-Gobelet est une galaxie irrégulière connue pour sa forme unique et ses caractéristiques de formation d'étoiles.",
    },
    {
      name: "Galaxie du Cygne",
      image: "/images/swan-galaxy.jpg",
      description:
        "Cette galaxie est souvent observée pour sa couleur bleue et son activité de formation d'étoiles. Elle est située dans la constellation du Cygne.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galaxiesData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentGalaxies = galaxiesData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="galaxies-section">
      <h2>Les Galaxies : Les Briques de l'Univers</h2>
      <p>
        Les galaxies sont des collections massives de gaz, de poussières et de
        milliards d'étoiles, liées par la gravité. Elles forment les grandes
        structures de l'univers, et sont fondamentales pour comprendre sa
        formation et son évolution.
      </p>
      <div className="galaxies-grid">
        {currentGalaxies.map((galaxy, index) => (
          <div className="galaxy-card" key={index}>
            <img
              src={galaxy.image}
              alt={galaxy.name}
              className="galaxy-image"
            />
            <h3>{galaxy.name}</h3>
            <p>{galaxy.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Précédent
        </button>
        <span>
          Page {currentPage + 1} sur {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Galaxies;
