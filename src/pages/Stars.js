import React, { useState, useEffect } from "react";
import "./Stars.css"; // Créez un fichier CSS pour styliser cette page

const Stars = () => {
  const starsData = [
    {
      name: "Le Soleil",
      image: "/images/sun.jpg",
      description:
        "Le Soleil est une étoile naine jaune, le centre de notre système solaire, et est essentiel à la vie sur Terre. Il est situé à environ 150 millions de kilomètres de notre planète.",
    },
    {
      name: "Bételgeuse",
      image: "/images/betelgeuse.jpg",
      description:
        "Bételgeuse est une supergéante rouge située dans la constellation d'Orion. Elle est en fin de vie et pourrait exploser en supernova dans un futur proche.",
    },
    {
      name: "Sirius",
      image: "/images/sirius.jpg",
      description:
        "Sirius est l'étoile la plus brillante dans le ciel nocturne. Elle est en fait un système binaire, composé de Sirius A, une étoile blanche brillante, et de Sirius B, une naine blanche.",
    },
    {
      name: "Rigel",
      image: "/images/rigel.jpg",
      description:
        "Rigel est une supergéante bleue très brillante située également dans la constellation d'Orion. Elle est l'une des étoiles les plus lumineuses de notre galaxie.",
    },
    {
      name: "Proxima du Centaure",
      image: "/images/proxima-centauri.jpg",
      description:
        "Proxima du Centaure est l'étoile la plus proche de la Terre, située à 4,24 années-lumière de nous. Elle est une naine rouge bien plus petite que notre Soleil.",
    },
    {
      name: "Antarès",
      image: "/images/antares.jpg",
      description:
        "Antarès est une supergéante rouge située dans la constellation du Scorpion. Elle est l'une des étoiles les plus grandes connues, avec un rayon environ 700 fois celui du Soleil.",
    },
    {
      name: "Aldébaran",
      image: "/images/aldebaran.jpg",
      description:
        "Aldébaran est une étoile géante rouge dans la constellation du Taureau, souvent appelée 'l'œil du Taureau'.",
    },
    {
      name: "Alpha Centauri",
      image: "/images/alpha-centauri.jpg",
      description:
        "Alpha Centauri est un système stellaire constitué de trois étoiles, dont Alpha Centauri A et B, qui sont très proches de notre Soleil.",
    },
    {
      name: "Castor",
      image: "/images/castor.jpg",
      description:
        "Castor est un système d'étoiles multiple dans la constellation des Gémeaux. Il est souvent considéré comme l'une des étoiles les plus brillantes du ciel nocturne.",
    },
    {
      name: "Pollux",
      image: "/images/pollux.jpg",
      description:
        "Pollux est une étoile géante orange, également située dans la constellation des Gémeaux, et est l'une des étoiles les plus brillantes dans notre ciel.",
    },
    {
      name: "Deneb",
      image: "/images/deneb.jpg",
      description:
        "Deneb est une supergéante blanche dans la constellation du Cygne, connue pour être l'une des étoiles les plus lumineuses de notre galaxie.",
    },
    {
      name: "Vega",
      image: "/images/vega.jpg",
      description:
        "Vega est une étoile brillante de la constellation de la Lyre. C'est une étoile bleue-blanche qui fait partie du triangle d'été.",
    },
    {
      name: "Capella",
      image: "/images/capella.jpg",
      description:
        "Capella est un système binaire d'étoiles géantes jaunes dans la constellation du Cocher, et elle est l'une des étoiles les plus brillantes dans le ciel nocturne.",
    },
    {
      name: "Acrux",
      image: "/images/acrux.jpg",
      description:
        "Acrux est une étoile brillante dans la constellation de la Croix du Sud et est en fait un système stellaire multiple.",
    },
    {
      name: "Fomalhaut",
      image: "/images/fomalhaut.jpg",
      description:
        "Fomalhaut est une étoile brillante dans la constellation du Poisson Austral. Elle est connue pour avoir une planète observée autour d'elle.",
    },
    {
      name: "Spica",
      image: "/images/spica.jpg",
      description:
        "Spica est une étoile massive bleue située dans la constellation de la Vierge, connue pour sa grande luminosité.",
    },
    {
      name: "Altair",
      image: "/images/altair.jpg",
      description:
        "Altair est une étoile brillante de la constellation de l'Aigle. C'est l'une des étoiles les plus proches de la Terre.",
    },
    {
      name: "Achernar",
      image: "/images/achernar.jpg",
      description:
        "Achernar est une étoile brillante située à l'extrémité de la constellation de l'Éridan. C'est une étoile très chaude et bleue.",
    },
    {
      name: "Betelgeuse",
      image: "/images/betelgeuse.jpg",
      description:
        "Betelgeuse est une supergéante rouge qui pourrait exploser en supernova à tout moment. Elle est une des étoiles les plus reconnues.",
    },
    {
      name: "Regulus",
      image: "/images/regulus.jpg",
      description:
        "Regulus est une étoile de la constellation du Lion et est souvent considérée comme la plus brillante de cette constellation.",
    },
    {
      name: "Procyon",
      image: "/images/procyon.jpg",
      description:
        "Procyon est une étoile du système binaire dans la constellation du Petit Chien. C'est l'une des étoiles les plus brillantes du ciel.",
    },
    {
      name: "Mirzam",
      image: "/images/mirzam.jpg",
      description:
        "Mirzam est une étoile brillante dans la constellation du Grand Chien. C'est une étoile bleue-blanche qui est très lumineuse.",
    },
    {
      name: "Sadr",
      image: "/images/sadr.jpg",
      description:
        "Sadr est une étoile située au centre de la nébuleuse du Cygne. Elle est une supergéante et très lumineuse.",
    },
    {
      name: "Zubenelgenubi",
      image: "/images/zubenelgenubi.jpg",
      description:
        "Zubenelgenubi est une étoile double dans la constellation de la Balance, connue pour sa luminosité et sa couleur verte.",
    },
    {
      name: "Nunki",
      image: "/images/nunki.jpg",
      description:
        "Nunki est une étoile de la constellation du Sagittaire. Elle est souvent utilisée comme guide pour localiser le centre de la Voie lactée.",
    },
    {
      name: "Rasalhague",
      image: "/images/rasalhague.jpg",
      description:
        "Rasalhague est une étoile de la constellation d'Ophiuchus et est considérée comme la tête du Serpentaire.",
    },
    {
      name: "Gacrux",
      image: "/images/gacrux.jpg",
      description:
        "Gacrux est la plus brillante étoile de la constellation de la Croix du Sud, souvent considérée comme un symbole de navigation.",
    },
    {
      name: "Alnilam",
      image: "/images/alnilam.jpg",
      description:
        "Alnilam est la plus brillante des trois étoiles formant la ceinture d'Orion. C'est une supergéante bleue très chaude.",
    },
    {
      name: "Sirius B",
      image: "/images/siriusb.jpg",
      description:
        "Sirius B est la compagne naine blanche de Sirius A. Elle est célèbre pour être l'une des premières naines blanches à être découvertes.",
    },
    {
      name: "Kochab",
      image: "/images/kochab.jpg",
      description:
        "Kochab est une étoile brillante dans la constellation de la Petite Ourse, souvent considérée comme une étoile polaire secondaire.",
    },
    {
      name: "Bellatrix",
      image: "/images/bellatrix.jpg",
      description:
        "Bellatrix est une étoile de la constellation d'Orion, souvent appelée 'la guerrière'. C'est une étoile bleu-blanc.",
    },
    {
      name: "Alphard",
      image: "/images/alphard.jpg",
      description:
        "Alphard est l'étoile la plus brillante de la constellation d'Hydre. Elle est souvent appelée 'l'étoile solitaire'.",
    },
    {
      name: "Menkent",
      image: "/images/menkent.jpg",
      description:
        "Menkent est une étoile de la constellation du Centaure. Elle est souvent utilisée comme référence pour la navigation dans l'hémisphère sud.",
    },
  ];

  const [starsPerPage, setStarsPerPage] = useState(6); // Nombre d'étoiles à afficher par page
  const [currentPage, setCurrentPage] = useState(1); // État pour suivre la page actuelle

  useEffect(() => {
    const updateStarsPerPage = () => {
      if (window.innerWidth < 768) {
        setStarsPerPage(4); // Afficher 3 étoiles sur les petits écrans
      } else {
        setStarsPerPage(6); // Afficher 6 étoiles sur les grands écrans
      }
    };

    updateStarsPerPage(); // Mettre à jour au premier rendu

    window.addEventListener("resize", updateStarsPerPage); // Mettre à jour lors du redimensionnement de la fenêtre
    return () => window.removeEventListener("resize", updateStarsPerPage); // Nettoyer l'écouteur
  }, []);

  // Calculer les étoiles à afficher en fonction de la page actuelle
  const indexOfLastStar = currentPage * starsPerPage;
  const indexOfFirstStar = indexOfLastStar - starsPerPage;
  const currentStars = starsData.slice(indexOfFirstStar, indexOfLastStar);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(starsData.length / starsPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-img">
      <div className="stars-section">
        <h2>Les Étoiles : Les Moteurs de l'Univers</h2>
        <p>
          Les étoiles sont des boules massives de gaz en fusion nucléaire qui
          illuminent l'univers et produisent les éléments nécessaires à la
          formation des planètes et à la vie.
        </p>
        <div className="stars-grid">
          {currentStars.map((star, index) => (
            <div className="star-card" key={index}>
              <img src={star.image} alt={star.name} className="star-image" />
              <h3>{star.name}</h3>
              <p>{star.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stars;
