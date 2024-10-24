import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Home.css";
import TestimonialSection from "../components/TestimonialsSection";
import InfoSection from "../components/InfoSection";
import NewsSection from "../components/NewsSection";

const Home = () => {
  return (
    <div className="home-container">
      <div className="parallax">
        <div className="content">
          <h1>Bienvenue sur AstroPhysicoPédie</h1>
          <p>
            Explorez l'univers, découvrez les étoiles et les lois qui le
            gouvernent.
          </p>
          <button className="explore-btn">
            <Link to="feature-section" smooth={true} duration={1000}>
              Commencez l'exploration
            </Link>
          </button>
          <InfoSection />
        </div>
      </div>

      <NewsSection />

      <div className="ellipse">
        <h2>Votre Voyage Commence Ici</h2>
        <p>Entrez dans la découverte du monde qui nous entoure</p>
      </div>

      <section className="feature-section">
        <h2>Fonctionnalités de l'AstroPhysicoPédie</h2>
        <p className="section-description">
          Découvrez les outils et ressources interactifs qui vous permettent
          d'explorer l'univers de manière ludique et pédagogique.
        </p>
        <div className="features-grid">
          {/* Visualisations interactives */}
          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="currentColor"
            >
              {/* <!-- Visualisation interactive icon - Planets orbiting --> */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
              />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="7" cy="12" r="1" fill="currentColor" />
              <circle cx="17" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="7" r="1" fill="currentColor" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
            <h3>Visualisations interactives</h3>
            <p>
              Plongez dans des visualisations en temps réel des étoiles,
              constellations et galaxies.
            </p>
            <button className="explore-btn">
              <RouterLink to="/visualizations">
                Découvrir
              </RouterLink>
            </button>
          </div>

          {/* Lois physiques expliquées */}
          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="currentColor"
            >
              {/* <!-- Physics Laws icon - Atom symbol --> */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <h3>Lois physiques expliquées</h3>
            <p>
              Explorez les lois de la physique qui régissent notre univers,
              expliquées de façon claire et accessible.
            </p>
            <button className="explore-btn">
              <RouterLink to="/Laws">
                Découvrir
              </RouterLink>
            </button>
          </div>

          {/* Outils d'observation */}
          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="currentColor"
            >
              {/* <!-- Observation tools icon - Telescope --> */}
              <path
                d="M19 14l-4-4 4-4M5 5v6h6M19 19v-4h-2v2h-4v2h6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="7"
                cy="17"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M7 20v2h2v-2H7zm0-2v2H5v-2h2z" fill="currentColor" />
            </svg>
            <h3>Outils d'observation</h3>
            <p>
              Accédez à des outils d'observation pour explorer le ciel, suivre
              des événements astronomiques en direct et bien plus.
            </p>
            <button className="explore-btn">
              <RouterLink to="/Tools">
                Découvrir
              </RouterLink>
            </button>
          </div>
        </div>
      </section>

      <div className="ellipse2">
        <h2>Et vous emmenera encore plus loin</h2>
        <p>Il n'y a rien de plus important que de comprendre notre place</p>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default Home;
