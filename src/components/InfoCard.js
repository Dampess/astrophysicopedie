// InfoCard.js
import React from "react";

const InfoCard = ({ svg, title, description, link }) => {
  return (
    <div className="info-card">
      {svg}
      <h3 style={{ fontSize: "1.2em" }}>{title}</h3>
      <p style={{ fontSize: "0.9em" }}>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path d="M15 8l4.5 4.5L15 17" />
            <path d="M9 15H2V2h15v7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default InfoCard;
