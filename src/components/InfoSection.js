// InfoSection.js
import React from "react";
import InfoCard from "./InfoCard";
import "./InfoSection.css"

const InfoSection = () => {
  const infoData = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <path d="M12 2l1.89 5.26h5.54l-4.42 3.21 1.69 5.53L12 15.84l-4.69 3.26L9 10.47 4.58 7.26h5.54L12 2z" />
        </svg>
      ),
      title: "Les mystères de l'univers",
      description:
        "Explorez les énigmes qui entourent les étoiles et les galaxies.",
      link: "/Stars", // Lien cliquable
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v10" />
          <path d="M22 12H12" />
        </svg>
      ),
      title: "Galaxies éloignées",
      description: "Découvrez des galaxies fascinantes et leurs secrets.",
      link: "/Galaxies", // Lien cliquable
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <path d="M12 2v20M2 12h20" />
          <path d="M7 5l-5 5 5 5M17 19l5-5-5-5" />
        </svg>
      ),
      title: "Lois fondamentales de la physique",
      description: "Comprenez les principes qui régissent notre univers.",
      link: "/Laws", // Lien cliquable
    },
  ];

  return (
    <section className="info-section">
      <h3>Ce que vous allez découvrir :</h3>
      <div className="info-cards">
        {infoData.map((info, index) => (
          <InfoCard
            key={index}
            svg={info.svg}
            title={info.title}
            description={info.description}
            link={info.link}
          />
        ))}
      </div>
    </section>
  );

};

export default InfoSection;
