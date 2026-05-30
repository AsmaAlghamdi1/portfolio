import { useEffect, useState } from "react";
import "../styles/hero.css";
import RobotScene from "./RobotScene";
import { FaGithub, FaLinkedinIn, FaBehance, FaEnvelope, FaTimes } from "react-icons/fa";

function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
            <div className="hero-first-row">
                <span className="hero-first" >UI / UX</span>
                <div className="star-wrapper">
                    <div className="hero-star"></div>
                </div>
            </div>

            <div className="hero-second-row">
                <div className="circle-line">
                    <span></span>
                    <span></span>
                    <span></span>
                <div className="line"></div>
                </div>

                <span className="hero-second">DESIGNER</span>
            </div>
        </h1>

        <p className="hero-about">
          UI/UX designer and developer focused on building futuristic, interactive, and user-centered digital experiences.
        </p>
         <button className="contact-btn" onClick={() => setShowContact(true)}>
          Contact Me
        </button>
      </div>

      <div className="hero-icons">
        <RobotScene />
      </div>
      {showContact && (
        <div className="contact-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-contact"
              onClick={() => setShowContact(false)}
            >
              <FaTimes />
            </button>

            <h2>Let’s Connect</h2>
            <p>Reach me through any of these platforms.</p>

            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Asmaa.sa1357@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/asma-alghamdi-885a332b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/AsmaAlghamdi1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.behance.net/asmaalghamdi20"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Hero;