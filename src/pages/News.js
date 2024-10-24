import React, { useState } from "react";
import "./News.css";

// Composant pour afficher un article de news
const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <img src={article.image} alt={article.title} className="article-image" />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Lire plus
      </a>
    </div>
  );
};

// Composant principal pour la page News
const News = () => {
  // Tableau d'articles statiques
  const articles = [
    {
      title: "La découverte d'une nouvelle exoplanète",
      description:
        "Des astronomes ont identifié une nouvelle exoplanète dans la zone habitable de son étoile.",
      url: "https://example.com/article1",
      image: "https://via.placeholder.com/300?text=Exoplanète",
    },
    {
      title: "Les mystères des trous noirs",
      description:
        "Une étude récente éclaire notre compréhension des trous noirs et de leur formation.",
      url: "https://example.com/article2",
      image: "https://via.placeholder.com/300?text=Trous+Noirs",
    },
    {
      title: "Une avancée dans la physique quantique",
      description:
        "Des physiciens ont fait une avancée majeure dans la compréhension des particules subatomiques.",
      url: "https://example.com/article3",
      image: "https://via.placeholder.com/300?text=Physique+Quantique",
    },
    {
      title: "Nouveaux défis dans l'astrophysique",
      description:
        "Les chercheurs abordent de nouveaux défis pour expliquer certaines anomalies dans l'univers.",
      url: "https://example.com/article4",
      image: "https://via.placeholder.com/300?text=Astrophysique",
    },
    {
      title: "La relativité générale expliquée simplement",
      description:
        "Une nouvelle vidéo éducative explique les concepts clés de la relativité générale d'Einstein.",
      url: "https://example.com/article5",
      image: "https://via.placeholder.com/300?text=Relativité+Générale",
    },
    {
      title: "Les progrès de l'astrophysique dans les 10 dernières années",
      description:
        "Un examen des découvertes majeures en astrophysique au cours de la dernière décennie.",
      url: "https://example.com/article6",
      image: "https://via.placeholder.com/300?text=Progrès+Astrophysique",
    },
    {
      title: "L'énergie noire et l'expansion de l'univers",
      description:
        "Une recherche récente jette une nouvelle lumière sur le rôle de l'énergie noire dans l'expansion de l'univers.",
      url: "https://example.com/article7",
      image: "https://via.placeholder.com/300?text=Énergie+Noire",
    },
    {
      title: "Le voyage vers Mars : quel avenir ?",
      description:
        "Des experts discutent des défis et des opportunités liés à une mission humaine sur Mars.",
      url: "https://example.com/article8",
      image: "https://via.placeholder.com/300?text=Voyage+vers+Mars",
    },
    {
      title: "La physique des particules et le LHC",
      description:
        "Une mise à jour sur les expériences en cours au Grand collisionneur de hadrons.",
      url: "https://example.com/article9",
      image: "https://via.placeholder.com/300?text=Physique+des+Particules",
    },
    {
      title: "La découverte de l'onde gravitationnelle",
      description:
        "Un retour sur la découverte historique des ondes gravitationnelles et son impact sur la science.",
      url: "https://example.com/article10",
      image: "https://via.placeholder.com/300?text=Ondes+Gravitationnelles",
    },
  ];

  const articlesPerPage = 3; // Nombre d'articles à afficher par page
  const [currentPage, setCurrentPage] = useState(1); // État pour suivre la page actuelle

  // Calculer les articles à afficher en fonction de la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="news-container">
      <h2>Nouveautés en Physique et Astronomie</h2>
      {currentArticles.length > 0 ? (
        currentArticles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))
      ) : (
        <p>Aucune nouvelle disponible pour le moment.</p>
      )}

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
  );
};

export default News;
