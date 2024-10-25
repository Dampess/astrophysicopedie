import React, { useState } from "react";
import "./TestimonialsSection.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "AstroPhysicoPédie m'a ouvert les yeux sur les merveilles de l'univers !",
      author: "Jean Dupont, astronome amateur",
    },
    {
      text: "Une excellente ressource pour quiconque s'intéresse à la physique et à l'astronomie.",
      author: "Dr. Alice Moreau, astrophysicienne",
    },
    {
      text: "J'ai enfin compris des concepts complexes grâce à des explications claires et accessibles.",
      author: "Marc Lefèvre, étudiant en physique",
    },
    {
      text: "Les activités proposées sont engageantes et enrichissantes pour les jeunes esprits curieux.",
      author: "Sophie Martin, enseignante en sciences",
    },
    {
      text: "Une plateforme incontournable pour quiconque souhaite explorer l'univers de la science !",
      author: "Thomas Giraud, passionné d'astronomie",
    },
    {
      text: "AstroPhysicoPédie est non seulement éducatif, mais aussi inspirant. Je le recommande à tous !",
      author: "Clara Dubois, étudiante en astronomie",
    },
    {
      text: "Les ressources proposées m'ont aidé à exceller dans mes études en sciences. Merci !",
      author: "Paul Bernard, étudiant en sciences naturelles",
    },
    {
      text: "Chaque article est un voyage fascinant à travers les concepts scientifiques. Un vrai plaisir de lire !",
      author: "Émilie Lefranc, blogueuse scientifique",
    },
  ];

  const testimonialsPerPage = 2; // Nombre de témoignages par page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevTestimonials = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="testimonial-section">
      <h2>Témoignages</h2>
      <div className="testimonials">
        {testimonials
          .slice(
            currentPage * testimonialsPerPage,
            (currentPage + 1) * testimonialsPerPage
          )
          .map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>
                "{testimonial.text}"
                <br />
                <strong>- {testimonial.author}</strong>
              </p>
            </div>
          ))}
      </div>
      <div className="testimonial-navigation">
        <button
          className="nav-button"
          onClick={prevTestimonials}
          disabled={currentPage === 0}
        >
           Précédent
        </button>
        <button
          className="nav-button"
          onClick={nextTestimonials}
          disabled={currentPage === totalPages - 1}
        >
          Suivant
        </button>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${index === currentPage ? "active" : ""}`}
            onClick={() => goToPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
