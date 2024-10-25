import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Laws.css"; // Si vous souhaitez ajouter un style personnalisé

const Laws = () => {
  const lawsData = [
    {
      title: "La gravité",
      description:
        "La gravité est la force d'attraction qui attire deux corps l'un vers l'autre, proportionnelle à leur masse. Cette force est responsable de la chute des objets et de l'orbite des planètes autour des étoiles.",
      link: "/laws/gravity",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 0L10 3h4l-2-3zm2 3v10h-4V3h4zM10 13v10h4v-10h-4zm-4 10h4v-4H6v4zm0-6h4v-4H6v4zm-2-8v4h2V7H4z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La gravité est une force fondamentale qui attire les objets les uns vers les autres en fonction de leur masse.",
      para2:
        "Elle joue un rôle central dans l'univers, responsable des orbites planétaires et du mouvement des galaxies.",
      para3:
        "Un exemple classique est la pomme qui tombe de l'arbre, inspirant Newton à formuler sa loi de la gravitation universelle.",
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
      ),
      para1:
        "La vitesse de la lumière est la vitesse maximale à laquelle toute information ou matière peut voyager.",
      para2:
        "Elle est essentielle pour la théorie de la relativité d'Einstein, qui affirme que rien ne peut aller plus vite que cette vitesse dans le vide.",
      para3:
        "Les distances en astrophysique, comme les années-lumière, mesurent la distance parcourue par la lumière en un an.",
    },
    {
      title: "La loi de Newton",
      description:
        "Les trois lois de Newton décrivent le mouvement des objets et les forces qui agissent sur eux.",
      link: "/laws/newtons-laws",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M4 12h16M12 4l8 8-8 8-8-8z" fill="#000" />
        </svg>
      ),
      para1:
        "Les lois de Newton décrivent le mouvement des objets et leur interaction avec les forces.",
      para2:
        "La première loi décrit l'inertie, la deuxième la relation entre force et accélération, et la troisième l'action-réaction.",
      para3:
        "La ceinture de sécurité est un exemple : lors d'un freinage, le corps tente de continuer son mouvement.",
    },
    {
      title: "L'effet Doppler",
      description:
        "L'effet Doppler décrit le changement de fréquence d'une onde en fonction de la vitesse de la source ou de l'observateur.",
      link: "/laws/doppler-effect",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M12 2L2 12h3v6h6v3h6v-3h3L12 2z" fill="#000" />
        </svg>
      ),
      para1:
        "L'effet Doppler explique comment le son ou la lumière change de fréquence selon la vitesse de l'observateur.",
      para2:
        "Cet effet est perceptible lorsqu'une ambulance approche ou s'éloigne : la hauteur du son change.",
      para3:
        "L'astronomie utilise l'effet Doppler pour déterminer la vitesse des galaxies par rapport à la Terre.",
    },
    {
      title: "La loi de la relativité",
      description:
        "Formulée par Einstein, la loi de la relativité explique que le temps et l'espace sont relatifs à l'observateur.",
      link: "/laws/relativity",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La relativité d'Einstein redéfinit le temps et l'espace comme relatifs et non absolus.",
      para2:
        "Elle postule que la gravité est une courbure de l'espace-temps et que la vitesse de la lumière est constante.",
      para3:
        "Le GPS utilise la relativité pour ajuster le temps, car les horloges en orbite et au sol se déplacent différemment.",
    },
    {
      title: "La thermodynamique",
      description:
        "Les lois de la thermodynamique décrivent les relations entre chaleur, travail et énergie.",
      link: "/laws/thermodynamics",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M3 3h18v2H3zm0 18h18v-2H3zm4-10h2v6H7zm8 0h2v6h-2z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "Les lois de la thermodynamique régissent les échanges d'énergie sous forme de chaleur et de travail.",
      para2:
        "La première loi stipule que l'énergie totale d'un système isolé reste constante.",
      para3:
        "Les moteurs thermiques fonctionnent en suivant les principes de la thermodynamique pour convertir la chaleur en travail.",
    },
    {
      title: "La loi de Coulomb",
      description:
        "La loi de Coulomb décrit la force électrostatique entre deux charges.",
      link: "/laws/coulombs-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 00-7.07 17.07l4.9-4.9A3 3 0 1012 12a3 3 0 00-1.83 5.36L4.93 19.07A10 10 0 0012 2z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La loi de Coulomb décrit la force entre deux charges en fonction de leur distance et de leur intensité.",
      para2:
        "Elle est fondamentale pour comprendre les interactions électriques entre particules chargées.",
      para3:
        "Elle est utilisée dans les champs électriques et pour calculer les forces entre atomes dans les molécules.",
    },
    {
      title: "La conservation de l'énergie",
      description:
        "Cette loi stipule que l'énergie ne peut être créée ni détruite, seulement transformée.",
      link: "/laws/conservation-of-energy",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2l-2 2h4zM2 12h4v2H2zm16 0h4v2h-4zM12 22l2-2h-4z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La loi de conservation de l'énergie indique que l'énergie totale dans un système reste constante.",
      para2:
        "L'énergie peut changer de forme mais ne peut jamais être créée ni détruite.",
      para3:
        "Elle explique comment l'énergie mécanique se transforme en chaleur lors de la friction dans les machines.",
    },
    {
      title: "La loi de Hooke",
      description:
        "La loi de Hooke énonce que la force exercée sur un ressort est proportionnelle à son extension.",
      link: "/laws/hookes-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M4 12h16M12 4l8 8-8 8-8-8z" fill="#000" />
        </svg>
      ),
      para1:
        "La loi de Hooke relie la force appliquée à un ressort à son allongement.",
      para2:
        "Elle est essentielle pour comprendre la déformation des matériaux élastiques.",
      para3:
        "Les balances à ressort et les amortisseurs utilisent ce principe pour mesurer la force et l'élasticité.",
    },
    {
      title: "Les lois de Kepler",
      description:
        "Les lois de Kepler décrivent le mouvement des planètes autour du soleil.",
      link: "/laws/keplers-laws",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 10-10 10A10 10 0 0012 2zm0 14a4 4 0 11-4-4 4 4 0 014 4z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "Les lois de Kepler décrivent comment les planètes orbitent autour du Soleil.",
      para2:
        "Elles expliquent la vitesse et les trajectoires elliptiques des planètes.",
      para3:
        "Les satellites utilisent ces lois pour calculer leurs trajectoires autour de la Terre.",
    },
    {
      title: "Le principe d'incertitude de Heisenberg",
      description:
        "Ce principe stipule qu'il est impossible de connaître avec précision la position et la vitesse d'une particule simultanément.",
      link: "/laws/heisenberg-uncertainty",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2L2 12h3v6h6v3h6v-3h3L12 2zm0 4l6 6-6 6-6-6 6-6z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "Ce principe de mécanique quantique limite la précision de la mesure de position et de vitesse.",
      para2:
        "Il explique que l'observation perturbe la particule, rendant l'observation précise impossible.",
      para3:
        "L'effet est crucial dans la conception des microscopes électroniques qui explorent les particules subatomiques.",
    },
    {
      title: "La loi de Planck",
      description:
        "La loi de Planck décrit la distribution d'énergie d'un corps noir en fonction de la température.",
      link: "/laws/plancks-law",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 13h4v-2h-4zm0-4h4V7h-4z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La loi de Planck décrit comment un corps noir émet de la lumière selon sa température.",
      para2:
        "Elle établit que l'énergie est quantifiée et se présente sous forme de paquets appelés quanta.",
      para3:
        "Elle est appliquée en astrophysique pour déterminer la température des étoiles en fonction de leur spectre lumineux.",
    },
    {
      title: "La seconde loi de la thermodynamique",
      description:
        "Cette loi énonce que l'entropie d'un système isolé ne peut qu'augmenter.",
      link: "/laws/second-law-thermodynamics",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 00-10 10h2a8 8 0 018-8v-2zm0 20a10 10 0 0010-10h-2a8 8 0 01-8 8v2zm-6-6h2v-4h-2zm8 0h2v-4h-2zm-4 2h2v-8h-2z"
            fill="#000"
          />
        </svg>
      ),
      para1:
        "La seconde loi de la thermodynamique stipule que l'entropie d'un système isolé augmente toujours.",
      para2:
        "Elle signifie que les systèmes tendent naturellement vers le désordre.",
      para3:
        "Elle est utilisée pour expliquer pourquoi les machines thermiques ne peuvent pas être 100 % efficaces.",
    },
    {
      title: "La loi de Snell-Descartes",
      description:
        "Cette loi décrit la réfraction de la lumière lorsqu'elle passe d'un milieu à un autre.",
      link: "/laws/snell-descartes",
      svg: (
        <svg width="50" height="50" viewBox="0 0 24 24">
          <path d="M2 12h20M12 2l5 5-5 5M12 22l-5-5 5-5" fill="#000" />
        </svg>
      ),
      para1:
        "La loi de Snell-Descartes décrit comment la lumière change de direction en passant entre deux milieux.",
      para2:
        "Elle relie l'angle d'incidence et de réfraction à l'indice de réfraction des milieux traversés.",
      para3:
        "Cette loi est utilisée en optique pour concevoir des lentilles et corriger la vision dans les lunettes.",
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
      para1:
        "La loi d'Ohm relie la tension, le courant et la résistance dans un circuit électrique par la formule V = IR.",
      para2:
        "Elle est essentielle pour dimensionner des circuits et prévoir les courants en fonction des résistances.",
      para3:
        "Un exemple courant est l'utilisation de la loi d'Ohm pour déterminer la tension requise pour faire fonctionner un appareil en connaissant sa résistance et son courant.",
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
      para1:
        "Le principe d'Archimède explique la poussée exercée par un fluide sur un objet immergé, égale au poids du fluide déplacé.",
      para2:
        "Il est utilisé pour calculer la flottabilité et comprendre pourquoi certains objets flottent et d'autres coulent.",
      para3:
        "Ce principe est illustré lorsqu'on plonge un objet dans l'eau : l'objet est soumis à une poussée vers le haut qui compense partiellement ou totalement son poids.",
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
      para1:
        "La loi de Faraday relie le changement de flux magnétique dans un circuit à l'induction d'une force électromotrice.",
      para2:
        "Elle est fondamentale dans le fonctionnement des générateurs et transformateurs électriques.",
      para3:
        "Elle explique, par exemple, la production de courant dans les turbines d'une centrale électrique où le mouvement du champ magnétique génère de l'électricité.",
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
      para1:
        "La loi de Bernoulli établit une relation inverse entre la vitesse d'un fluide et la pression qu'il exerce.",
      para2:
        "Elle est essentielle pour comprendre le comportement des fluides en mouvement et est appliquée en aérodynamique.",
      para3:
        "Par exemple, la forme des ailes d'avion crée une différence de vitesse et de pression qui génère une portance, permettant l'envol.",
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
                      para1: law.para1,
                      para2: law.para2,
                      para3: law.para3,
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