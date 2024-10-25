import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Laws.css"; // Si vous souhaitez ajouter un style personnalisé

const Laws = () => {
  const lawsData = [
    {
      title: "La gravité",
      description:
        "La gravité est la force d'attraction qui attire deux corps l'un vers l'autre, proportionnelle à leur masse. Cette force est responsable de la chute des objets et de l'orbite des planètes autour des étoiles.",
      link: "/laws/gravity", // Lien vers une page dédiée
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 0L10 3h4l-2-3zm2 3v10h-4V3h4zM10 13v10h4v-10h-4zm-4 10h4v-4H6v4zm0-6h4v-4H6v4zm-2-8v4h2V7H4z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de gravité
    },
    {
      title: "La vitesse de la lumière",
      description:
        "La vitesse de la lumière dans le vide est d'environ 299 792 458 m/s. Elle représente la limite supérieure à laquelle l'information et la matière peuvent voyager, et elle joue un rôle crucial dans la théorie de la relativité.",
      link: "/laws/speed-of-light",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 3l2.5 2-2.5 2L12 3zm0 18l-2.5-2 2.5-2 2.5 2-2.5 2zm0-9l-6 6h12l-6-6z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de vitesse
    },
    {
      title: "La loi de Newton",
      description:
        "Les trois lois de Newton décrivent le mouvement des objets et les forces qui agissent sur eux. La première loi stipule qu'un objet au repos reste au repos et un objet en mouvement continue à se déplacer à une vitesse constante, à moins qu'une force extérieure n'agisse sur lui.",
      link: "/laws/newtons-laws",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M4 12h16M12 4l8 8-8 8-8-8z" fill="#000" />
        </svg>
      ), // Remplacez ceci par le SVG de Newton
    },
    {
      title: "L'effet Doppler",
      description:
        "L'effet Doppler décrit le changement de fréquence d'une onde en fonction de la vitesse de la source ou de l'observateur. Cela explique pourquoi le son d'une sirène semble plus aigu lorsque l'ambulance se rapproche et plus grave lorsqu'elle s'éloigne.",
      link: "/laws/doppler-effect",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M12 2L2 12h3v6h6v3h6v-3h3L12 2z" fill="#000" />
        </svg>
      ), // Remplacez ceci par le SVG de Doppler
    },
    {
      title: "La loi de la relativité",
      description:
        "Formulée par Albert Einstein, la loi de la relativité générale et restreinte explique que le temps et l'espace ne sont pas absolus, mais relatifs à l'observateur. Cela a des implications profondes sur la compréhension du cosmos, y compris la dilatation du temps.",
      link: "/laws/relativity",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de relativité
    },
    {
      title: "La thermodynamique",
      description:
        "Les lois de la thermodynamique décrivent la relation entre la chaleur, le travail et l'énergie. La première loi, par exemple, affirme que l'énergie totale d'un système isolé reste constante.",
      link: "/laws/thermodynamics",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M3 3h18v2H3zm0 18h18v-2H3zm4-10h2v6H7zm8 0h2v6h-2z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de thermodynamique
    },
    {
      title: "La loi de Coulomb",
      description:
        "La loi de Coulomb décrit la force électrostatique entre deux charges. Elle stipule que la force est proportionnelle au produit des charges et inversement proportionnelle au carré de la distance entre elles.",
      link: "/laws/coulombs-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 00-7.07 17.07l4.9-4.9A3 3 0 1012 12a3 3 0 00-1.83 5.36L4.93 19.07A10 10 0 0012 2z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de Coulomb
    },
    {
      title: "La conservation de l'énergie",
      description:
        "Cette loi stipule que l'énergie ne peut être créée ni détruite, seulement transformée d'une forme à une autre. C'est un principe fondamental qui s'applique à toutes les sciences physiques.",
      link: "/laws/conservation-of-energy",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2l-2 2h4zM2 12h4v2H2zm16 0h4v2h-4zM12 22l2-2h-4z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de conservation
    },
    {
      title: "La loi de Hooke",
      description:
        "La loi de Hooke énonce que la force exercée sur un ressort est proportionnelle à son extension. Cette loi est essentielle dans l'étude des matériaux et de l'ingénierie.",
      link: "/laws/hookes-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M4 12h16M12 4l8 8-8 8-8-8z" fill="#000" />
        </svg>
      ), // Remplacez ceci par le SVG de Hooke
    },
    {
      title: "Les lois de Kepler",
      description:
        "Les lois de Kepler décrivent le mouvement des planètes autour du soleil. Elles incluent la loi des orbites, la loi des aires, et la loi des périodes, qui relient les distances des planètes au soleil à leurs périodes orbitales.",
      link: "/laws/keplers-laws",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 10-10 10A10 10 0 0012 2zm0 14a4 4 0 11-4-4 4 4 0 014 4z"
            fill="#000"
          />
        </svg>
      ), // Remplacez ceci par le SVG de Kepler
    },
    {
      title: "Le principe d'incertitude de Heisenberg",
      description:
        "Ce principe stipule qu'il est impossible de connaître simultanément avec précision la position et la vitesse d'une particule. C'est un concept central de la mécanique quantique qui souligne les limites de la mesure à des échelles subatomiques.",
      link: "/laws/heisenberg-uncertainty",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2L2 12h3v6h6v3h6v-3h3L12 2zm0 4l6 6-6 6-6-6 6-6z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      title: "La loi de Planck",
      description:
        "La loi de Planck décrit la distribution de l'énergie d'un corps noir en fonction de la température et de la longueur d'onde. Elle explique le rayonnement thermique et la quantification de l'énergie en paquets discrets appelés quanta.",
      link: "/laws/plancks-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 13h4v-2h-4zm0-4h4V7h-4z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      title: "La seconde loi de la thermodynamique",
      description:
        "La seconde loi de la thermodynamique énonce que l'entropie totale d'un système isolé ne peut qu'augmenter. Cela signifie que les systèmes naturels tendent vers un état de désordre maximum.",
      link: "/laws/second-law-thermodynamics",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 00-10 10h2a8 8 0 018-8v-2zm0 20a10 10 0 0010-10h-2a8 8 0 01-8 8v2zm-6-6h2v-4h-2zm8 0h2v-4h-2zm-4 2h2v-8h-2z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      title: "La loi de Snell-Descartes",
      description:
        "Cette loi décrit la réfraction de la lumière lorsqu'elle passe d'un milieu à un autre. Elle relie l'angle d'incidence et l'angle de réfraction à l'indice de réfraction des milieux.",
      link: "/laws/snell-descartes",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M2 12h20M12 2l5 5-5 5M12 22l-5-5 5-5" fill="#000" />
        </svg>
      ),
    },
    {
      title: "La loi d'Ohm",
      description:
        "Cette loi fondamentale de l'électricité lie la tension, le courant, et la résistance dans un circuit, établissant que V = IR.",
      link: "/laws/ohm",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M2 12h20M12 2v20" fill="#000" />
        </svg>
      ),
    },
    {
      title: "Le principe d'Archimède",
      description:
        "Principe de la mécanique des fluides, il indique qu'un corps immergé subit une poussée vers le haut équivalente au poids du fluide déplacé.",
      link: "/laws/archimedes",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2l-2 8h4l-2-8zm0 12l-2 8h4l-2-8zm-8-2h4v2H4zm12 0h4v2h-4z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      title: "La loi de Faraday",
      description:
        "Cette loi d'induction électromagnétique stipule qu'un champ magnétique changeant dans le temps induit une force électromotrice dans un circuit fermé.",
      link: "/laws/faraday",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 10h4v4h-4z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      title: "La loi de Bernoulli",
      description:
        "Dans la dynamique des fluides, cette loi énonce que plus la vitesse d'un fluide augmente, plus la pression diminue. Elle est fondamentale pour comprendre le vol.",
      link: "/laws/bernoulli",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M2 12h20M6 8l4 4-4 4M18 8l-4 4 4 4" fill="#000" />
        </svg>
      ),
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setExpandedIndex(null); // Réinitialise l'index ouvert lors d'une nouvelle recherche
  };

  const filteredLaws = lawsData.filter((law) =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="laws-section">
      <h2>Lois Fondamentales de la Physique</h2>
      <p>
        Découvrez les lois qui régissent notre univers, aussi bien sur Terre que
        dans l'espace.
      </p>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une loi..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <ul className="laws-list">
        {filteredLaws.length > 0 ? (
          filteredLaws.map((law, index) => (
            <li key={index} className="law-item">
              <div className="law-icon">{law.svg}</div>
              <h3>{law.title}</h3>
              <button
                onClick={() => toggleDescription(index)}
                className="learn-more-link"
              >
                {expandedIndex === index ? "Réduire" : "Lire plus"}
              </button>
              {expandedIndex === index && (
                <div className="law-description">
                  <p>{law.description}</p>
                  <Link
                    to={`/laws/${law.title}`}
                    state={{
                      title: law.title,
                      description: law.description,
                    }}
                  >
                    Lire plus
                  </Link>
                </div>
              )}
            </li>
          ))
        ) : (
          <p>Aucune loi trouvée pour ce terme de recherche.</p>
        )}
      </ul>
    </div>
  );
};

export default Laws;