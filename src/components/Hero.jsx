import { useEffect, useState } from "react";
import "../styles/hero.css";
import RobotScene from "./RobotScene";


// import {
//   FaReact,
//   FaFigma,
//   FaNodeJs,
//   FaHtml5,
// } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaBehance, FaEnvelope, FaTimes } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiMysql,
// } from "react-icons/si";
function Hero() {
  const [showContact, setShowContact] = useState(false);
  // const roles = [
  //   { first: "UI / UX", second: " DESIGNER" },
  //   { first: "FRONTEND", second: " DEVELOPER" },
  //   { first: "BACKEND", second: " DEVELOPER" },
  //   { first: "SOFTWARE", second: " ENGINEER" },
  // ];


// const [roleIndex, setRoleIndex] = useState(0);
// const [displayFirst, setDisplayFirst] = useState("");
// const [displaySecond, setDisplaySecond] = useState("");
// const [isDeleting, setIsDeleting] = useState(false);
// const [activeLine, setActiveLine] = useState("first");

// useEffect(() => {
//   const currentRole = roles[roleIndex];
//   const fullFirst = currentRole.first;
//   const fullSecond = currentRole.second;

//   const typingSpeed = isDeleting ? 45 : 90;
//   const pauseTime = 1200;
//   const timeout = setTimeout(() => {
//     if (!isDeleting) {
//       if (displayFirst.length < fullFirst.length) {
//         setActiveLine("first");
//         setDisplayFirst(fullFirst.slice(0, displayFirst.length + 1));
//       } else if (displaySecond.length < fullSecond.length) {
//         setActiveLine("second");
//         setDisplaySecond(fullSecond.slice(0, displaySecond.length + 1));
//       } else {
//         setActiveLine("second");
//         setTimeout(() => setIsDeleting(true), pauseTime);
//       }
//     } else {
//       if (displaySecond.length > 0) {
//         setActiveLine("second");
//         setDisplaySecond(fullSecond.slice(0, displaySecond.length - 1));
//       } else if (displayFirst.length > 0) {
//         setActiveLine("first");
//         setDisplayFirst(fullFirst.slice(0, displayFirst.length - 1));
//       } else {
//         setIsDeleting(false);
//         setRoleIndex((prev) => (prev + 1) % roles.length);
//       }
//     }
//   }, typingSpeed);

//   return () => clearTimeout(timeout);
// }, [displayFirst, displaySecond, isDeleting, roleIndex]);


//   const currentRole = roles[roleIndex];

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